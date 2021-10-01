import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rdv } from '../classes/rdv';
import { httpOptions } from '../variables';

@Injectable( {
  providedIn: 'root'
} )
export class RdvService {

  constructor( private httpClient: HttpClient ) { }

  loadRdv (): Observable< Rdv[] > {
    return this.httpClient.get< Rdv[] >( environment.urlApi + "rdv", httpOptions );
  }

  getRdv ( rdvId: number | undefined ): Observable<Rdv> {
    return this.httpClient.get<Rdv>( environment.urlApi + "rdv/" + rdvId, httpOptions );
  }

  addRdv ( newRdv: Rdv ): Observable<Rdv> {
    return this.httpClient.post<Rdv>( environment.urlApi + "rdv", newRdv, httpOptions );
  }

  deleteRdv ( rdvId: number | undefined ): Observable<Object> {
    return this.httpClient.delete( environment.urlApi + "rdv/" + rdvId, httpOptions );
  }

  editRdv ( updatedRdv: Rdv ): Observable<Rdv> {
    return this.httpClient.put<Rdv>( environment.urlApi + "rdv/" + updatedRdv.id, updatedRdv, httpOptions );
  }

}
