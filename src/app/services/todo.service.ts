import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Todo } from '../interfaces/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private auth: AuthService
  ) { }

  createTodo(todo: Todo) {
    const id = this.db.createId();
    return this.db
    .doc(`todos/${id}`)
    .set({id, ...todo})
    .then(() => {
      this.snackBar.open(`${todo.category}Todoを作成しました。`, null, {
        duration: 3000
      });
    });
  }

  getTodo(): Observable<Todo[]> {
    return this.db
    .collection<Todo>(`todos`)
    .valueChanges();
  }

  getTodoList(id: string): Observable<Todo> {
    return this.db
    .doc<Todo>(`todos/${id}`)
    .valueChanges();
  }

  deleteTodo(id: string): Promise<void> {
    return this.db
    .doc(`todos/${id}`)
    .delete()
    .then(() => {
      this.snackBar.open('todosを削除しました。', null, {
        duration: 3000
      });
    });
  }

  getCategoryWorks(): Observable<Todo[]> {
    return this.db
    .collection<Todo>('todos', ref => {
      return ref.where('category', '==', '仕事');
    })
    .valueChanges();
  }

  getCategoryPrivates(): Observable<Todo[]> {
    return this.db
      .collection<Todo>('todos', ref => {
        return ref.where('category', '==', 'プライベート');
      })
      .valueChanges();
  }

  getCategoryOthers(): Observable<Todo[]> {
    return this.db
      .collection<Todo>('todos', ref => {
        return ref.where('category', '==', 'その他');
      })
      .valueChanges();
  }


}
