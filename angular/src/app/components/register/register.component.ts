import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidationService } from "./../../services/validation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, ValidationService.emailValidator]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert("OK :D");
    }
  }
}
