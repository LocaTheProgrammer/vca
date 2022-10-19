import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBaseDF } from 'src/app/models/dynamic-form/ItemBaseDF';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() question!: ItemBaseDF<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
