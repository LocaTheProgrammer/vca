import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ItemBaseDF } from 'src/app/models/dynamic-form/ItemBaseDF';
import { TextInputDF } from 'src/app/models/dynamic-form/TextInputDF';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: ItemBaseDF<string>[] = [


      new TextInputDF({
        key: 'name',
        label: 'First name',
        value: 'NOME PIPPO',
        required: true,
        order: 1
      }),

      new TextInputDF({
        key: 'surname',
        label: 'Last name',
        value: 'COGNOME PIPPO',
        required: true,
        order: 2
      }),

      new TextInputDF({
        key: 'age',
        label: 'Age',
        value: '123',
        required: true,
        order: 3
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}