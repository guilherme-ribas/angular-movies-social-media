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

  filmes$: Observable<any[]>;
  busca: string;
  paginas: number;
  currentPage = 4;

  ngOnInit(): void {
    const busca = localStorage.getItem('busca');
    const pagina = localStorage.getItem('pagina');
    if(busca && pagina){
      this.busca = busca;
      this.currentPage = parseInt(pagina);
      this.searchMovie(parseInt(pagina));
    }
  }


  searchMovie(pagina = 1) {
    this.filmes$ = this.filmeService.loadByName(this.busca, pagina).pipe(
      tap((dados: any) => this.paginas = dados.total_pages),
      map((filmes: any) => filmes.results),
      );

    localStorage.setItem('busca', this.busca);
    localStorage.setItem('pagina', pagina.toString());
  }



}
