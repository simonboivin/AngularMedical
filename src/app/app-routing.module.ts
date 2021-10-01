import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardianGuard } from './guardian.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsComponent } from './patients/patients.component';
import { RdvDetailsComponent } from './rdv-details/rdv-details.component';
import { RdvComponent } from './rdv/rdv.component';
import { VillesDetailsComponent } from './villes-details/villes-details.component';
import { VillesComponent } from './villes/villes.component';

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "logout", component: LogoutComponent },
  { path: "", component: DashboardComponent, canActivate: [GuardianGuard] },
  {
    path: "patients", component: PatientsComponent, canActivate: [GuardianGuard], children:
      [
        { path: "", component: PatientsListComponent },
        { path: "addedit/:id", component: PatientsDetailsComponent }
      ]
  },

  { path: "villes", component: VillesComponent, canActivate: [GuardianGuard] },
  { path: "villes/addedit/:id", component: VillesDetailsComponent, canActivate: [GuardianGuard] },
  { path: "rdv", component: RdvComponent, canActivate: [GuardianGuard] },
  { path: "rdv/addedit/:id", component: RdvDetailsComponent, canActivate: [GuardianGuard] }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )

export class AppRoutingModule { }
