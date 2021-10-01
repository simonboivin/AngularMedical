import { Component, OnInit } from '@angular/core';
import { RdvService } from '../services/rdv.service';
import { faCogs, faEdit, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Rdv } from '../classes/rdv';

@Component( {
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
} )
export class RdvComponent implements OnInit {


  // import uses fa icons
  faCogs = faCogs;
  faEdit = faEdit;
  faSync = faSync;
  faTrash = faTrash;

  rdvList: Rdv[] = [];
  succes: boolean = false;
  erreur: boolean = false;


  constructor( private rdvService: RdvService ) { }


  ngOnInit (): void {
    this.refreshList();
  }

  refreshList (): void {
    this.succes = false;
    this.erreur = false;
    this.rdvService.loadRdv().subscribe(
      data => {
        this.rdvList = data;
        console.log( data );

      }
    );
  }


  deleteRdv ( rdvId: number | undefined ): void {

    if ( confirm( "Voulez-vous supprimer le rendez-vous #" + rdvId + "?" ) ) {
      this.rdvService.deleteRdv( rdvId ).subscribe( data => {
        this.refreshList();
        this.succes = true;
      }, error => {
        this.erreur = true;
      } );
    }

  }

}
