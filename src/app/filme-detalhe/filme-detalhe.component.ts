import { BuscaService } from './../busca.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmeDetalhe, MovieVideos } from './filme-detalhe';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit {

  detalhe: FilmeDetalhe;
  videos: MovieVideos;
  constructor(
    private route: ActivatedRoute,
    private buscaService: BuscaService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => this.getDetalhe(params['id']));
  }

  getDetalhe(id) {
    this.buscaService.getDetails(id).pipe(
      tap(detalhe => this.detalhe = detalhe),
      switchMap((result) => this.buscaService.getVideos(id))
    ).subscribe((videos: MovieVideos) => {
      this.videos = videos;
      console.log(videos);
    } );
  }

  getUrl(key){
    console.log(key)
    return `https://www.youtube.com/embed/${key}`;
  }

}
