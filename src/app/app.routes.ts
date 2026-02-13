import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.spec';
import { ProfileComponent } from './components/profile/profile.spec.js';
import { RegisterComponent } from './components/register/register.spec

const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' } // fallback to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
