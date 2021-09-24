import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Patients } from '../classes/patients';
import { Villes } from '../classes/villes';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { urlApi } from "src/app/variables";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Authorization': 'Basic YWRtaW5AYWRtaW4uY29tOjEyMzQ='
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
    this.http.get<Patients[]>(urlApi + "patients", httpOptions).subscribe(
      data => {
        this.patientsList = data;
        console.log(data);
      }
    );
  }

}
