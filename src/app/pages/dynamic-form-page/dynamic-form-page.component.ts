import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBaseDF } from 'src/app/models/dynamic-form/ItemBaseDF';
import DynamicFormControlService from './service/dynamic-form-control.service';
import { DynamicFormService } from './service/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html',
  styleUrls: ['./dynamic-form-page.component.css']
})
export class DynamicFormPageComponent implements OnInit {

  questions: ItemBaseDF<string>[] | null = [];
  // @Input() questions: ItemBaseDF<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private dfcs: DynamicFormControlService, private dfs: DynamicFormService) { }

  ngOnInit() {
    console.log('init')
    this.dfs.getQuestions().subscribe(questions => {
      console.log(questions)
      this.questions = questions
    })
    this.form = this.dfcs.toFormGroup(this.questions as ItemBaseDF<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}