import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from '../classes/patients';
import { Rdv } from '../classes/rdv';
import { PatientsService } from '../services/patients.service';
import { RdvService } from '../services/rdv.service';
import { PatientsSorters } from '../sorters/patients.sorters';
import { faCalendarAlt, faClock, faCogs, faEdit, faNotesMedical, faStickyNote, faSync, faTrash, faUserInjured } from '@fortawesome/free-solid-svg-icons';

@Component( {
  selector: 'app-rdv-details',
  templateUrl: './rdv-details.component.html',
  styleUrls: ['./rdv-details.component.css']
} )
export class RdvDetailsComponent implements OnInit {

  rdv: Rdv = new Rdv();
  patientsList: Patients[] = [];


  // import uses fa icons
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faCogs = faCogs;
  faEdit = faEdit;
  faNotesMedical = faNotesMedical;
  faStickyNote = faStickyNote;
  faSync = faSync;
  faTrash = faTrash;
  faUserInjured = faUserInjured;


  constructor( private rdvService: RdvService, private patientsService: PatientsService, private activatedRoute: ActivatedRoute, private router: Router, private patientsSorters: PatientsSorters ) { }

  ngOnInit (): void {
    this.patientsService.loadPatients("").subscribe(
      data => {
        this.patientsList = data.sort( this.patientsSorters.sorterByNameAsc );
        console.log( data );
      } );

    let rdvId = Number( this.activatedRoute.snapshot.paramMap.get( "id" ) );
    this.rdvService.getRdv( rdvId ).subscribe( data => {
      this.rdv = data;
    } );
  }

  submitForm () {
    if ( this.rdv.id == undefined ) { // Ajout de rdv
      this.rdvService.addRdv( this.rdv ).subscribe(
        data => {
          console.log( "Rdv ajouté:" );
          console.log( data );
          this.router.navigate( ['rdv'] );
        }
      );
    } else { //edition de rdv
      this.rdvService.editRdv( this.rdv ).subscribe(
        data => {
          console.log( "Rdv édité:" );
          console.log( data );
          this.router.navigate( ['rdv'] );

        }
      );
    }
  }

  
  comparePatientsFn ( c1: Patients, c2: Patients ): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
