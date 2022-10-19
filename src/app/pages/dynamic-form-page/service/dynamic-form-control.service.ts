import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ItemBaseDF } from 'src/app/models/dynamic-form/ItemBaseDF';

@Injectable({
  providedIn: 'root'
})
export default class DynamicFormControlService {

  constructor() { }

  toFormGroup(questions: ItemBaseDF<string>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
