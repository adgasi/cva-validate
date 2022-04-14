import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';

export interface IModel {
  text: string;
}

@Component({
  selector: 'custom-form-field',
  templateUrl: './custom-form-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormFieldComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomFormFieldComponent),
      multi: true,
    },
  ],
})
export class CustomFormFieldComponent
  implements ControlValueAccessor, Validator, OnChanges
{
  @Input() ngModel: IModel | undefined;

  @Input() rndNumber = 0;

  value: IModel | undefined;
  onChangeAccessor = (_: any) => {};
  onTouchAccessor = (_: any) => {};
  registerOnChange(fn: any) {
    this.onChangeAccessor = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchAccessor = fn;
  }

  writeValue(value: IModel) {
    console.log('writeValue!', value);
    this.value = value;
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges', changes);
  }

  validate() {
    console.log('validate', this.rndNumber);
    return null;
  }
}
