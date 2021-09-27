import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Patients } from "../classes/patients";
import { httpOptions } from 'src/app/variables'



@Injectable({
    providedIn: 'root'
})


export class PatientsService {

    constructor(private httpClient: HttpClient) { }

    loadPatients(): Observable<Patients[]> {
        console.log("Chargement des villes");
        return this.httpClient.get<Patients[]>(environment.urlApi + "patients", httpOptions);
    }

    addPatient(newPatient : Patients) : Observable<Patients> {
        return this.httpClient.post<Patients>(environment.urlApi + "patients", newPatient, httpOptions);
    } 

}