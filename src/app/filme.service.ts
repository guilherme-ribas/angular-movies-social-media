import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  loadByName(filme){
   return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${environment.API_KEY}&language=pt-PT&page=1&include_adult=false&query=${filme}`)
      .pipe(
        map((filmes: any) => filmes.results),
        tap(console.log),
      );
  }
}
