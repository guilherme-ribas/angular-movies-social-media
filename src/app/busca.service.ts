import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  constructor(private http: HttpClient) { }

  search(nome: string, pagina = 1, tipo: string) {
    let params = new HttpParams();
    params = params.set('api_key', environment.API_KEY);
    params = params.set('language', 'pt-PT');
    params = params.set('page', pagina.toString());
    params = params.set('include_adult', 'false');
    params = params.set('query', nome);
    return this.http.get(`https://api.themoviedb.org/3/search/${tipo}`, { params })
      .pipe(
        take(1),
      );
  }

  searchPopular(pagina = 1) {
    let params = new HttpParams();
    params = params.set('api_key', environment.API_KEY);
    params = params.set('language', 'pt-PT');
    params = params.set('page', pagina.toString());
    return this.http.get(`https://api.themoviedb.org/3/movie/popular`, { params })
      .pipe(
        take(1),
      );
  }

  loadSerieByName(nome: string, pagina = 1) {
    let params = new HttpParams();
    params = params.set('api_key', environment.API_KEY);
    params = params.set('language', 'pt-PT');
    params = params.set('page', pagina.toString());
    params = params.set('query', nome);
    return this.http.get(`https://api.themoviedb.org/3/search/tv`, { params })
      .pipe(
        take(1),
      );
  }
}
