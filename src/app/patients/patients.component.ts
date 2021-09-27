import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'; import { Patients } from '../classes/patients';
import { Villes } from '../classes/villes';
import { faCogs, faEdit, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { PatientsService } from '../services/patients.service';
import { VillesService } from '../services/villes.service';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Authorization': environment.apiBasicAuth
    }
  )
};


@Component( {
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
} )

export class PatientsComponent implements OnInit {

  @ViewChild( 'closeModalButton' ) closeButtonElement: any;

  faCogs = faCogs;
  faEdit = faEdit;
  faSync = faSync;
  faTrash = faTrash;

  patientsList: Array<Patients> = [];
  newPatient: Patients = new Patients();
  villesList: Array<Villes> = [];


  constructor( private patientsService: PatientsService, private villeService: VillesService ) { }

  ngOnInit (): void {
    this.refreshList();

  }

  refreshList (): void {

    this.villeService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log( data );
      }
    );

    this.patientsService.loadPatients().subscribe(
      data => {
        this.patientsList = data;
        console.log( data );
      } );
  }


  submitForm (): void {
    if ( this.newPatient.id == undefined ) {
      console.log( this.newPatient );
      this.patientsService.addPatient( this.newPatient ).subscribe(
        data => {
          console.log( data );
          this.closeButtonElement.nativeElement.click();
          this.refreshList();
        }
      );
    } else {
      this.patientsService.editPatient( this.newPatient ).subscribe( data => {
        console.log( data );
        this.closeButtonElement.nativeElement.click();
        this.refreshList();
      } );
    }
  }

  deletePatient ( idPatient: number | undefined ) {
    if ( confirm( "Voulez-vous supprimer le patient #" + idPatient + "?" ) ) {
      this.patientsService.deletePatient( idPatient ).subscribe( data => {
        this.closeButtonElement.nativeElement.click();
        this.refreshList();
      } );
    }
  }

  editPatient ( idPatient: number | undefined ) {
    this.patientsService.getPatient( idPatient ).subscribe( data => {
      this.newPatient = data;

    } );
  }

  compareVilleFn(c1: Villes, c2: Villes): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
}

}