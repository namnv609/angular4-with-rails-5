import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ValidationService } from "./../../services/validation.service";

@Component({
  selector: 'app-control-messages',
  templateUrl: "./control-messages.component.html",
  providers: [ValidationService]
})
export class ControlMessagesComponent implements OnInit {
  @Input() control: FormControl;
  @Input() field: string;

  constructor(private validationSvc: ValidationService) {}

  ngOnInit() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this.validationSvc.getValidatorErrorMessage(propertyName, this.field, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
