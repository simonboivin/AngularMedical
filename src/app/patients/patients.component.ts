import { Component, OnInit } from '@angular/core';
import { Patients } from '../classes/patients';
import { Villes } from '../classes/villes';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  faCogs = faCogs;

  ville: Villes = new Villes(1, "Paris", 75000);
  patient: Patients = new Patients(5, "Dalton", "Avrel", "0145247000", "avrel@dalton.org", this.ville);

  constructor() { }

  ngOnInit(): void {
  }

}
