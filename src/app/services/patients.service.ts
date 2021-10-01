import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Patients } from "../classes/patients";
import { httpOptions } from 'src/app/variables';



@Injectable( {
    providedIn: 'root'
} )
export class PatientsService {

    constructor( private httpClient: HttpClient ) { }

    loadPatients (): Observable<Patients[]> {
        console.log( "Chargement des villes" );
        return this.httpClient.get<Patients[]>( environment.urlApi + "patients", httpOptions );
    }

    getPatient ( patientId: number | undefined ): Observable<Patients> {
        console.log( "Get patient" + patientId );
        return this.httpClient.get<Patients>( environment.urlApi + "patients/" + patientId, httpOptions );
    }

    addPatient ( newPatient: Patients ): Observable<Patients> {
        return this.httpClient.post<Patients>( environment.urlApi + "patients", newPatient, httpOptions );
    }

    deletePatient ( patientId: number | undefined ): Observable<Object> {
        return this.httpClient.delete( environment.urlApi + "patients/" + patientId, httpOptions );
    }

    editPatient ( updatedPatient: Patients ): Observable<Patients> {
        return this.httpClient.put<Patients>( environment.urlApi + "patients/" + updatedPatient.id, updatedPatient, httpOptions );
    }

}