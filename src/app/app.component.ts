import { FilmeService } from './filme.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private filmeService: FilmeService){}
  title = 'angular-movies-social-media';

  filmes$: Observable<any[]>;


  searchMovie(filme: string){
    this.filmes$ = this.filmeService.loadByName(filme);
  }
}
