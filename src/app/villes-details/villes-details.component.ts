import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Villes } from '../classes/villes';
import { VillesService } from '../services/villes.service';

@Component( {
  selector: 'app-villes-details',
  templateUrl: './villes-details.component.html',
  styleUrls: ['./villes-details.component.css']
} )
export class VillesDetailsComponent implements OnInit {

  ville: Villes = new Villes();

  constructor( private villesService: VillesService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit (): void {
    let villeId = Number( this.activatedRoute.snapshot.paramMap.get( 'id' ) );
    this.villesService.getCity( villeId ).subscribe(
      data => { this.ville = data; }
    );
  }

  submitForm (): void {
    if ( this.ville.id == undefined ) {
      console.log( this.ville );
      this.villesService.addCities( this.ville ).subscribe(
        data => {
          console.log( data );
          this.router.navigate( ['/villes'] );
        }
      );
    } else {
      this.villesService.editCity( this.ville ).subscribe( data => {
        console.log( data );
        this.router.navigate( ['/villes'] );
      } );
    }
  }


}
