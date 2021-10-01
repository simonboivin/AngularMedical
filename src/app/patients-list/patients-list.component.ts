import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'; import { Patients } from '../classes/patients';
import { Villes } from '../classes/villes';
import { faCogs, faEdit, faSearch, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { PatientsService } from '../services/patients.service';
import { VillesService } from '../services/villes.service';
import { PatientsSorters } from '../sorters/patients.sorters';

@Component( {
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
} )
export class PatientsListComponent implements OnInit {


  @ViewChild( 'closeModalButton' ) closeButtonElement: any;


  faCogs = faCogs;
  faEdit = faEdit;
  faSearch = faSearch;
  faSync = faSync;
  faTrash = faTrash;

  patientsList: Array<Patients> = [];
  newPatient: Patients = new Patients();
  villesList: Array<Villes> = [];

  search: String = "";
  erreur: Boolean = false;
  succes: Boolean = false;

  constructor( private patientsService: PatientsService, private villeService: VillesService, private patientsSorters: PatientsSorters ) { }


  sorter: ( a: any, b: any ) => number = this.patientsSorters.sorterByIdAsc;

  ngOnInit (): void {

    this.refreshList();

  }


  loadPatientsList (): void {
    this.patientsService.loadPatients( this.search ).subscribe(
      data => {
        this.patientsList = data.sort( this.sorter );
        console.log( data );
      } );
  }

  refreshList (): void {

    this.succes = false;
    this.erreur = false;
    this.search = "";
    this.villeService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log( data );
      }
    );

    this.loadPatientsList();

    this.newPatient = new Patients();
  }


  deletePatient ( idPatient: number | undefined ) {
    if ( confirm( "Voulez-vous supprimer le patient #" + idPatient + "?" ) ) {
      this.patientsService.deletePatient( idPatient ).subscribe( data => {
        this.closeButtonElement.nativeElement.click();
        this.refreshList();
        this.succes = true;
      }, error => {
        this.erreur = true;
      } );
    }
  }

  compareVilleFn ( c1: Villes, c2: Villes ): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  sortByIdAsc (): void {
    this.sorter = this.patientsSorters.sorterByIdAsc;
    this.refreshList();
  }

  sortByNameAsc (): void {
    this.sorter = this.patientsSorters.sorterByNameAsc;
    this.refreshList();
  }

  sortByPrenomAsc (): void {
    this.sorter = this.patientsSorters.sorterByPrenomAsc;
    this.refreshList();
  }

  sortByEmailAsc (): void {
    this.sorter = this.patientsSorters.sorterByEmailAsc;
    this.refreshList();
  }

  sortByTelephoneAsc (): void {
    this.sorter = this.patientsSorters.sorterByTelephoneAsc;
    this.refreshList();
  }

  sortByVilleAsc (): void {
    this.sorter = this.patientsSorters.sorterByVilleAsc;
    this.refreshList();
  }

  sortByIdDesc (): void {
    this.sorter = this.patientsSorters.sorterByIdDesc;
    this.refreshList();
  }

  sortByNameDesc (): void {
    this.sorter = this.patientsSorters.sorterByNameDesc;
    this.refreshList();
  }

  sortByPrenomDesc (): void {
    this.sorter = this.patientsSorters.sorterByPrenomDesc;
    this.refreshList();
  }

  sortByEmailDesc (): void {
    this.sorter = this.patientsSorters.sorterByEmailDesc;
    this.refreshList();
  }

  sortByTelephoneDesc (): void {
    this.sorter = this.patientsSorters.sorterByTelephoneDesc;
    this.refreshList();
  }

  sortByVilleDesc (): void {
    this.sorter = this.patientsSorters.sorterByVilleDesc;
    this.refreshList();
  }
}