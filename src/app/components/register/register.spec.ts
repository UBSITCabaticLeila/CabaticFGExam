import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  model: any = {}; // store form data

  submitForm() {
    console.log("Form submitted!", this.model);
    alert("Registration successful!");
  }
}
