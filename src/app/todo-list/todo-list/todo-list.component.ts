import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo = {
                    userId: 'aaa',
                    title: 'カラオケ',
                    createdAt: new Date(),
                    content: 'ラウワンいきます。'
                  };

  lists = new Array(5).fill(null);
  constructor() { }

  ngOnInit() {
  }

}
