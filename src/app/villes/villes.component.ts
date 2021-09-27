import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Villes } from "../classes/villes";
import { environment } from 'src/environments/environment';
import { faCogs, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { VillesService } from '../services/villes.service';



const httpOptions = {
  headers: new HttpHeaders(
    {
      'Authorization': environment.apiBasicAuth
    }
  )
};


@Component( {
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
} )

export class VillesComponent implements OnInit {

  // import uses fa icons
  faCogs = faCogs;
  faSync = faSync;
  faTrash = faTrash;

  @ViewChild( 'closeModalButton' ) closeButtonElement: any;

  villesList: Array<Villes> = [];
  nom: string = "";
  newVille: Villes = new Villes();

  constructor( private villesService: VillesService ) { }

  ngOnInit (): void {

    this.updateCities();

  }

  updateCities (): void {
    this.villesService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log( data );
      }
    );
  }

  submitForm (): void {
    console.log( this.newVille );
    this.villesService.addCities( this.newVille ).subscribe(
      data => { console.log( data ); this.closeButtonElement.nativeElement.click(); this.updateCities(); }
    );
  }

  deleteCity ( idVille: number | undefined ) {
    if ( confirm( "Voulez-vous supprimer la ville #" + idVille + "?" ) ) {
      console.log( "Suppression de la ville #" + idVille );
      this.villesService.deleteCity( idVille ).subscribe( data => {
        this.closeButtonElement.nativeElement.click();
        console.log( data ); this.updateCities();
      } );

    }
  }

}
