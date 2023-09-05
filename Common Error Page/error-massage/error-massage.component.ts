import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-massage',
  templateUrl: './error-massage.component.html',
  styleUrls: ['./error-massage.component.css']
})
export class ErrorMassageComponent implements OnInit {
  @Input() ctrl: FormControl;

  ERROR_MESSAGE = {
    required: () => `It is mandatory to provide information in this field.`,
    minlength: (par) => `Input of at least ${par.requiredLength} characters is mandatory in this field.`,
    maxlength: (par) => `Input in this field must not exceed ${par.requiredLength} characters.`,
    pattern: (par) => `Please provide accurate and valid data that meets the required format in this field.`,
    max: (par) => `A maximum of ${par.max} digits is permissible for this field.`,
    min: (par) => `A minimum of ${par.min} digits is required for this field.`,
    whitespace:() => `Field cannot contain only white spaces.`
  };
  constructor() { }

  ngOnInit() {
  }

  shouldShowErrors(): boolean {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }

  listOfErrors(): string[] {
    return Object.keys(this.ctrl.errors).map(
      err => this.ERROR_MESSAGE[err](this.ctrl.getError(err))
    );
  }
}
