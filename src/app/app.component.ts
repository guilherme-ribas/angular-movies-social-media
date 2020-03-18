import { BuscaService } from './busca.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(private filmeService: BuscaService) {}
  title = 'angular-movies-social-media';

  resultados$: Observable<any[]>;
  busca: string;
  paginas: number;
  currentPage = 1;
  menu: string = 'movie';
  complete = true;

  ngOnInit(): void {
    this.destaques();
  }


  searchMovie(pagina = 1) {
    this.complete = false;
    if (this.menu === 'destaque') {
      this.menu = 'movie';
    }

    this.resultados$ = this.filmeService.search(this.busca, pagina, this.menu).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => {
        this.complete = true;
        return filmes.results;
      }),
      );
  }

  destaques(pagina = 1){
    this.complete = false;
    this.currentPage = 1;
    this.resultados$ = this.filmeService.searchPopular(pagina, this.menu).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => {
        this.complete = true;
        return filmes.results;
      }),
      );
  }

  clickMenu(tipo: string) {
    this.menu = tipo;
    this.currentPage = 1;
    if (this.busca) {
      this.searchMovie();
    } else {
      this.destaques();
    }
  }

  paginator(pagina){
    if (this.menu !== 'destaque' && this.busca) {
      this.searchMovie(pagina);
    } else {
      this.destaques(pagina);
    }

  }

}
