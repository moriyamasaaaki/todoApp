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
    .set(todo)
    .then(() => {
      this.snackBar.open('Todoを作成しました。', null, {
        duration: 3000
      });
    });
  }

  getTodo(): Observable<Todo[]> {
    return this.db
    .collection<Todo>(`todos`)
    .valueChanges();
  }
}
