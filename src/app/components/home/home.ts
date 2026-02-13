import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  appTitle: string = "My Angular SPA";
  version: number = 1.0;
  isActive: boolean = true;
}
