import { FilmeService } from './filme.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private filmeService: FilmeService) {}
  title = 'angular-movies-social-media';

  filmes$: Observable<any[]>;
  busca: string;
  paginas: number;


  searchMovie(pagina?: number) {
    this.filmes$ = this.filmeService.loadByName(this.busca, pagina).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => filmes.results),
      );
  }



}
