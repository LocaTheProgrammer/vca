import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserFormComponent),
      multi: true,
    },
  ],
})
export class UserFormComponent implements ControlValueAccessor {

  @Input() name: string = ''
  @Input() surname: string = ''
  @Input() age: number = 0

  user: User

  constructor() { }


  onChange: any = () => { };
  onTouch: any = () => { };



  writeValue(value: any) {
    this.user = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }


  saveUser() {
    let uTemp = new User(this.name, this.surname, this.age)
    this.user = uTemp
    this.onChange(uTemp);
    this.onTouch(uTemp);
  }
}
