import { Component, OnInit } from '@angular/core';
import { faCoffee, faShieldVirus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCoffee = faCoffee;
  faShieldVirus = faShieldVirus;
  constructor() { }

  ngOnInit(): void {
  }

}
