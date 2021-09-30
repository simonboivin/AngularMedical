import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component( {
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
} )
export class LoginFormComponent implements OnInit {

  erreur: Boolean = false;

  public user: any = {
    email: "",
    password: ""
  };

  constructor( private userService: UserService, private router: Router ) { }

  ngOnInit (): void {
  }


  authenticate () {
    this.userService.authenticate( this.user ).subscribe(
      data => {
        console.log( 'tentative de login' );
        console.log( data );
        if ( data.id > 0 ) {
          sessionStorage.setItem( "connectedUser", data );
          console.log( "Login ok, redirection..." );
          this.router.navigate( [''] );
        } else {
          this.erreur = true;
        }
      }, error => {
        console.log( 'Erreur de login' );
        this.erreur = true;
      }
    );

  }

}
