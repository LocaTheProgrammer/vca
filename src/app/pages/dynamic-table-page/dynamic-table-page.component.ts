import { Component } from '@angular/core';
import { DynamicInput } from 'src/app/models/dynamic-table/dynamic-input.model';

@Component({
  selector: 'app-dynamic-table-page',
  templateUrl: './dynamic-table-page.component.html',
  styleUrls: ['./dynamic-table-page.component.css']
})
export class DynamicTablePageComponent {

  dataList: DynamicInput[] = [
    new DynamicInput('input', '', 'text', 'label text: '),
    new DynamicInput('input', '', 'number', 'label number: '),
    new DynamicInput('input', '', 'date', 'label date: '),
    new DynamicInput('output', 'pippo output', 'text', 'label text disabled: ')
  ]
  headers: string[] = ["value"]

}