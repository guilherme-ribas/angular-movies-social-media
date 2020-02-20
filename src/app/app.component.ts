import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient){}
  apiKey = 'bc3e10f9fad1e8d375d8044c2a06842c';
  title = 'angular-movies-social-media';

  filmes: any[] = [];


  searchMovie(filme: string){
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-PT&page=1&include_adult=false&query=${filme}`)
      .pipe(
        map((filmes: any) => filmes.results),
        tap(console.log),
      ).subscribe(
        dados => this.filmes = dados
      );
  }
}
