import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  categories = ['仕事',　'プライベート', 'その他'];

  form = this.fb.group({
    title: [''],
    content: [''],
    category: ['']
  });

  get titleControl() {
    return this.form.get('title') as FormControl;
  }

  get contentControl() {
    return this.form.get('content') as FormControl;
  }

  get categoryControl() {
    return this.form.get('category') as FormControl;
  }


  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private auth: AuthService
  ) {}

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value);
    this.todoService.createTodo(
      {
        userId: this.auth.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...this.form.value
      }
    );
    this.form.reset();
  }

}
