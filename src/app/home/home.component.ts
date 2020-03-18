import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BuscaService } from '../busca.service';
import { tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private buscaService: BuscaService,
    private route: ActivatedRoute) { }

  resultados$: Observable<any[]>;
  busca: string;
  paginas: number;
  currentPage = 1;
  menu = 'movie';
  complete = true;

  ngOnInit(): void {
    this.route.params.subscribe( (params: any) => {
      console.log(params);
      this.menu = params['tipo'];
      this.busca = params['busca'];
      this.paginator();
    });
  }


  searchMovie(pagina = 1) {
    this.complete = false;
    this.resultados$ = this.buscaService.search(this.busca, pagina, this.menu).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => {
        this.complete = true;
        return filmes.results;
      }),
      );
  }

  destaques(pagina = 1) {
    this.complete = false;
    this.currentPage = 1;
    this.resultados$ = this.buscaService.searchPopular(pagina, this.menu).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => {
        this.complete = true;
        return filmes.results;
      }),
      tap(console.log)
      );
  }

  clickMenu(tipo: string) {
    this.menu = tipo;
    this.currentPage = 1;
    if (this.busca != '0') {
      this.searchMovie();
    } else {
      this.destaques();
    }
  }

  paginator(pagina = 1) {
    if (this.busca != '0') {
      this.searchMovie(pagina);
    } else {
      this.destaques(pagina);
    }

  }

}
