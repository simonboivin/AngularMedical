import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Villes } from "../classes/villes";
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Authorization': environment.apiBasicAuth
    }
  )
};


@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})

export class VillesComponent implements OnInit {

  villes: Array<Villes> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Villes[]>(environment.urlApi + "villes", httpOptions).subscribe(
      data => {
        this.villes = data;
        console.log(data);
      }
    );
  }

}
