import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { PatientsComponent } from './patients/patients.component';
import { VillesComponent } from './villes/villes.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { VillesDetailsComponent } from './villes-details/villes-details.component';
import { RdvComponent } from './rdv/rdv.component';
import { RdvDetailsComponent } from './rdv-details/rdv-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientsComponent,
    VillesComponent,
    UtilisateursComponent,
    DashboardComponent,
    LoginFormComponent,
    LogoutComponent,
    PatientsDetailsComponent,
    VillesDetailsComponent,
    RdvComponent,
    RdvDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
