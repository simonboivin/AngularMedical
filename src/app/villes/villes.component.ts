import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Villes } from "../classes/villes";
import { environment } from 'src/environments/environment';
import { faSync } from '@fortawesome/free-solid-svg-icons';

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

  faSync = faSync;

  villes: Array<Villes> = [];
  @Input() nom: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.updateCities();

  }

  updateCities(): void {


    this.http.get<Villes[]>(environment.urlApi + "villes", httpOptions).subscribe(
      data => {
        this.villes = data;
        console.log(data);
      }
    );
  }

}
