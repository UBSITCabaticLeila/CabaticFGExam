import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class RegisterComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    terms: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    console.log(this.registrationForm.value);
    alert('Form Submitted! Check console for values.');
  }
}
