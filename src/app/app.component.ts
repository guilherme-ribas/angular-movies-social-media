import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router) {}
  title = 'angular-movies-social-media';

  busca: string;
  menu = 'movie';

  clickMenu(tipo: string) {
    this.menu = tipo;
    this.buscar();
  }

  buscar() {
    this.router.navigate(['home', this.menu, this.busca ? this.busca : '0']);
  }

}
