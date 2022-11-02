import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string
  @Input() type: string
  @Input() valueInput: string = ''
  @Input() label: string = ''
  @Input() disabledCondition: boolean

  ngOnInit() {
    if (this.valueInput != '') {
      this.inputValue = this.valueInput
    }
  }

  onChange: any = () => { };
  onTouch: any = () => { };

  inputValue = '';

  set value(val) {
    this.inputValue = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
