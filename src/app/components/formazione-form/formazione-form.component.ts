import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-formazione-form',
  templateUrl: './formazione-form.component.html',
  styleUrls: ['./formazione-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormazioneFormComponent),
      multi: true,
    },
  ],
})
export class FormazioneFormComponent implements ControlValueAccessor, OnInit { //implements ControlValueAccessor

  userList: User[] = []
  clonedUserList: User[] = []
  user: User
  counter = 0
  constructor() { }
  ngOnInit(): void {
    this.userList = []
  }


  onChange: any = () => { };
  onTouch: any = () => { };


  set userVal(val) {
    if (this.counter > 1) {
      this.user = val;
      this.userList.push(val)
    }
    this.counter++;
  }


  writeValue(value: any) {
    this.userVal = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }



  addLine() {
    this.userList.push({
      name: '',
      surname: '',
      age: 0
    })

  }


  export() {
    this.userList.forEach(user => {
      if (user != null && user != undefined) {
        this.clonedUserList.push(user)
      }
    })
    this.onChange(this.clonedUserList);
    this.onTouch(this.clonedUserList);
  }

}

