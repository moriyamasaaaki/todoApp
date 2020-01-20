import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  user$ = this.auth.afUser$;
  id: string;
  todos$: Observable<Todo[]> = this.todos.getTodo();

  constructor(
    private auth: AuthService,
    private todos: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
}
