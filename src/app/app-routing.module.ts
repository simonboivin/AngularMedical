import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardianGuard } from './guardian.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientsComponent } from './patients/patients.component';
import { VillesComponent } from './villes/villes.component';

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "logout", component: LogoutComponent },
  { path: "", component: DashboardComponent, canActivate: [GuardianGuard] },
  { path: "patients", component: PatientsComponent, canActivate: [GuardianGuard] },
  { path: "villes", component: VillesComponent, canActivate: [GuardianGuard] }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )

export class AppRoutingModule { }
