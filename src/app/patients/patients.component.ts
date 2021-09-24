import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Patients } from '../classes/patients';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
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

  faCogs = faCogs;

  patientsList: Array<Patients> = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Patients[]>(environment.urlApi + "patients", httpOptions).subscribe(
      data => {
        this.patientsList = data;
        console.log(data);
      }
    );
  }

}
