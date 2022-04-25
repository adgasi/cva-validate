import { Component } from '@angular/core';
import { IModel } from './custom-form-field/custom-form-field.component';

// Possible solutions:
// Initial idea.
// Model must be an object, and I pass a new reference. Bad because parent needs to control when the child gets updated.\
//
// Corret approach
// Create setter on given @Input in child component, registerOnValidatorChange from Validator interface and then call onValidatorAccessor
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rndNumber = 7;

  myModel: IModel = {
    text: 'foo',
  };

  setNumber() {
    this.rndNumber = Math.random();
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
