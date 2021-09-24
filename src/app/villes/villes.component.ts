import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Villes } from "../classes/villes";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Authorization': 'Basic YWRtaW5AYWRtaW4uY29tOjEyMzQ='
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
    this.http.get<Villes[]>("http://localhost:8080/api/villes", httpOptions).subscribe(
      data => {
        this.villes = data;
        console.log(data);
      }
    );
  }

}
