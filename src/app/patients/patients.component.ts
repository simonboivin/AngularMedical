import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patients } from '../classes/patients';
import { Villes } from '../classes/villes';
import { faCogs, faSync } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders(
    {
      'Authorization': environment.apiBasicAuth
    }
  )
};


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit {

  @ViewChild('closeModalButton') closeButtonElement: any;
  faCogs = faCogs;
  faSync = faSync;

  patientsList: Array<Patients> = [];
  newPatient: Patients = new Patients();
  villesList: Array<Villes> = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.updatePageList();
  }

  updatePageList(): void {
    this.http.get<Villes[]>(environment.urlApi + "villes", httpOptions).subscribe(
      data => {
        this.villesList = data;
        console.log(data);
      }
    );
    this.http.get<Patients[]>(environment.urlApi + "patients", httpOptions).subscribe(
      data => {
        console.log('Chargement de la liste');
        this.patientsList = data;
        console.log(data);
      }
    );
  }


  submitForm(): void {
    console.log(this.newPatient);
    this.http.post<Patients>(environment.urlApi + "patients", this.newPatient, httpOptions).subscribe(
      data => {
        console.log(data);
        this.closeButtonElement.nativeElement.click();
        this.updatePageList();
      }
    )
  }

}
