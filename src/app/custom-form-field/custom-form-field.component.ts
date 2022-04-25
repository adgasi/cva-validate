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

  @Input()
  set rndNumber(value: number) {
    this._rndNumber = value;
    this.onValidatorAccessor();
  }
  get rndNumber() {
    return this._rndNumber;
  }
  private _rndNumber = 0;

  value: IModel | undefined;

  onChangeAccessor = (_: any) => {};
  onTouchAccessor = (_: any) => {};
  onValidatorAccessor = () => {};

  registerOnChange(fn: any) {
    this.onChangeAccessor = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchAccessor = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorAccessor = fn;
  }

  writeValue(value: IModel) {
    console.log('writeValue!', 'value', value, this.rndNumber);
    this.value = value;
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges', changes);
  }

  validate() {
    console.log('validate', 'value', this.value, 'rndNumber', this.rndNumber);
    return null;
  }
}
