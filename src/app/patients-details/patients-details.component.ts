import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from '../classes/patients';
import { Villes } from '../classes/villes';
import { PatientsService } from '../services/patients.service';
import { VillesService } from '../services/villes.service';

@Component( {
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
} )
export class PatientsDetailsComponent implements OnInit {

  patient: Patients = new Patients();
  villesList: Array<Villes> = [];

  constructor( private patientsService: PatientsService, private villesService: VillesService, private activatedRoute: ActivatedRoute, private router: Router ) {
    console.log( "construction" );
  }

  ngOnInit (): void {
    this.villesService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log( data );
      } );
      
    let patientId = Number( this.activatedRoute.snapshot.paramMap.get( "id" ) );
    this.patientsService.getPatient( patientId ).subscribe( data => {
      this.patient = data;
    } );
  }

  submitForm () {
    console.log( this.patient );

    if ( this.patient.id == undefined ) { // Ajout de patient
      this.patientsService.addPatient( this.patient ).subscribe(
        data => {
          console.log( "Patient ajouté:" );
          console.log( data );
          this.router.navigate( ['patients'] );
        }
      );
    } else { //edition de patient
      this.patientsService.editPatient( this.patient ).subscribe(
        data => {
          console.log( "Patient édité:" );
          console.log( data );
          this.router.navigate( ['patients'] );

        }
      );
    }
  }

  compareVilleFn ( c1: Villes, c2: Villes ): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
