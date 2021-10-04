import { Component, OnInit, ViewChild } from '@angular/core';
import { Villes } from "../classes/villes";
import { faCogs, faEdit, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { VillesService } from '../services/villes.service';
import { Observable } from 'rxjs';
import { VillesStatsEnum, VilleState } from '../ngrx/villes.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GetAllVillesAction } from '../ngrx/villes.actions';

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

  VillesState$: Observable<VilleState> | null = null;
  readonly VillesStateEnum = VillesStatsEnum;

  constructor( private villesService: VillesService, private store: Store<any> ) { }

  ngOnInit (): void {
    this.refreshList();

  }

  refreshList (): void {
    this.VillesState$ = this.store.pipe(
      map( ( state ) => state.catalogState )
    );

    this.store.dispatch( new GetAllVillesAction( {} ) );
    /*
    this.villesService.loadCities().subscribe(
      data => {
        this.villesList = data;
        console.log( data );

      }
    );
    this.newVille = new Villes();*/
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
