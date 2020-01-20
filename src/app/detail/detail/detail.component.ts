import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  todos$: Observable<Todo>;

  constructor(
    private todos: TodoService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) {
    route.paramMap.subscribe(params => {
      this.todos$ = this.todos.getTodoList(params.get('id'));
    });
  }

  ngOnInit() {
  }

  delete() {
    this.dialog.open(DeleteDialogComponent)
      .afterClosed()
      .subscribe(status => {
        if (status) {
          this.route.paramMap.subscribe(params => {
            console.log(params);
            this.todos.deleteTodo(params.get('id'));
          });
          this.router.navigateByUrl('/');
        }
      });
  }


}
