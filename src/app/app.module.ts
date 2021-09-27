import { NgModule } from '@angular/core';
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
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientsComponent,
    VillesComponent,
    UtilisateursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
