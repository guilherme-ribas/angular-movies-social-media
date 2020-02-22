import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  loadByName(filme: string) {
    let params = new HttpParams();
    params = params.set('api_key', environment.API_KEY);
    params = params.set('language', 'pt-PT');
    params = params.set('page', '1');
    params = params.set('include_adult', 'false');
    params = params.set('query', filme);
    return this.http.get(`https://api.themoviedb.org/3/search/movie`, { params })
      .pipe(
        map((filmes: any) => filmes.results),
        tap(console.log),
      );
  }
}
