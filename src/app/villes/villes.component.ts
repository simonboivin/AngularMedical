import { Component, OnInit, ViewChild } from '@angular/core';
import { Villes } from "../classes/villes";
import { faCogs, faEdit, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { VillesService } from '../services/villes.service';



@Component( {
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
} )

export class VillesComponent implements OnInit {

  // import uses fa icons
  faCogs = faCogs;
  faEdit = faEdit;
  faSync = faSync;
  faTrash = faTrash;

  @ViewChild( 'closeModalButton' ) closeButtonElement: any;

  villesList: Array<Villes> = [];
  nom: string = "";
  newVille: Villes = new Villes();


  constructor( private villesService: VillesService ) { }

  ngOnInit (): void {

    this.refreshList();

  }

  refreshList (): void {
    this.villesService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log( data );

      }
    );
    this.newVille = new Villes();
  }


  deleteCity ( idVille: number | undefined ) {
    if ( confirm( "Voulez-vous supprimer la ville #" + idVille + "?" ) ) {
      console.log( "Suppression de la ville #" + idVille );
      this.villesService.deleteCity( idVille ).subscribe( data => {
        this.closeButtonElement.nativeElement.click();
        console.log( data ); this.refreshList();
      } );

    }
  }

}
