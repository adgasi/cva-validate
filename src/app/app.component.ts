import { Component, ViewChild } from '@angular/core';
import {
  CustomFormFieldComponent,
  IModel,
} from './custom-form-field/custom-form-field.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rndNumber = 0;

  myModel: IModel = {
    text: 'foo',
  };

  // TODO: how to trigger validate() when myModel is primitive?
  // e.g. myModel = 'foo'
  setNumber() {
    this.rndNumber = Math.random();
    this.myModel = { ...this.myModel };
  }

  setModelText() {
    this.myModel = {
      ...this.myModel,
      text: String(Math.random()),
    };
  }

  onModelChange(model: any) {
    console.log('onModelChange!', model);
  }
}
