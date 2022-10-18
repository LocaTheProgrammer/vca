import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ],
})
export class SearchComponent implements ControlValueAccessor {
  @Input() objProperty: string;
  @Input() list: any[];

  user: any;

  constructor() { }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

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

  set userSelected(val: any) {
    this.user = val;
    this.onChange(val);
    this.onTouch(val);
  }
}
