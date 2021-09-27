import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Villes } from "../classes/villes";
import { environment } from 'src/environments/environment';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { VillesService } from '../services/villes.service';



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

  villesList: Array<Villes> = [];
  nom: string = ""
  newVille: Villes = new Villes();

  constructor(private villesService: VillesService) { }

  ngOnInit(): void {

    this.updateCities();

  }

  updateCities(): void {
    this.villesService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log(data);
      }
    );
  }

  submitForm(): void {
    console.log(this.newVille);
    this.villesService.addCities(this.newVille).subscribe(
      data => { console.log(data); this.updateCities() }
    )
  }

}
