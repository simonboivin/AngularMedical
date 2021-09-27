import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Villes } from "../classes/villes";
import { httpOptions } from "../variables";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})


export class VillesService {

    constructor(private httpClient: HttpClient) { }

    loadCities(): Observable<Villes[]> {
        return this.httpClient.get<Villes[]>(environment.urlApi + "villes", httpOptions);
    }

    addCities(newVille: Villes): Observable<Villes> {
        return this.httpClient.post<Villes>(environment.urlApi + "villes", newVille, httpOptions);
    }

    deleteCity(villeId: number|undefined): Observable<void> {
        return this.httpClient.delete<void>(environment.urlApi + "villes/" + villeId, httpOptions);
    }

}