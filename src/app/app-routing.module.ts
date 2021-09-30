import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { VillesComponent } from './villes/villes.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "patients", component: PatientsComponent },
  { path: "villes", component: VillesComponent }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )

export class AppRoutingModule { }
