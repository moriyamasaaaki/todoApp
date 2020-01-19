import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]]
  });

  get titleControl() {
    return this.form.get('title') as FormControl;
  }

  get contentControl() {
    return this.form.get('content') as FormControl;
  }

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value);
  }

}
