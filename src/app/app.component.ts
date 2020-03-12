import { FilmeService } from './filme.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(private filmeService: FilmeService) {}
  title = 'angular-movies-social-media';

  resultados$: Observable<any[]>;
  busca: string;
  paginas: number;
  currentPage = 1;
  menu: string = 'movie';

  ngOnInit(): void {

  }


  searchMovie(pagina = 1) {
    this.resultados$ = this.filmeService.search(this.busca, pagina, this.menu).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => filmes.results),
      );
  }

  destaques(pagina = 1){
    this.resultados$ = this.filmeService.searchPopular(pagina).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => filmes.results),
      );
  }

  paginator(pagina){
    if (this.menu !== 'destaque') {
      this.searchMovie(pagina);
    } else {
      this.destaques(pagina);
    }

  }

  opcaoMenu(valor) {
    this.menu = valor;
    this.searchMovie();
  }



}
