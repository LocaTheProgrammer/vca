import { Component, Input, OnInit } from '@angular/core';
import { DynamicInput } from 'src/app/models/dynamic-table/dynamic-input.model';

@Component({
  selector: 'dynamic-table-component',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @Input() headers: any[] = []
  @Input() dataList: any[] = []
  dataListHeaders: any[] = []

  isVisibleArray: boolean[] = []

  inputValue: any[] = []


  isDynamicInput: boolean = false

  isValueDate(value: any) {
    return Date.parse(value)
  }

  ngOnInit(): void {

    if ((this.dataList.length > 0) && (this.dataList[0] instanceof DynamicInput)) {
      this.dataListHeaders = Object.keys(this.dataList[0])
      console.log(this.dataList)
      console.log(this.dataListHeaders)
      for (let i = 0; i < this.dataListHeaders.length; i++) {
        this.isVisibleArray[i] = false
      }
      this.isDynamicInput = true
    }
  }

  show(index: number) {
    this.isVisibleArray[index] = true
  }

  hide(index: number) {
    this.isVisibleArray[index] = false
  }

  print() {
    this.inputValue.forEach(value => {
      if (value != undefined) {
        console.log(value)
      }
    })
  }

}