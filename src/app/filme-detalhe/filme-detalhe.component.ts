import { BuscaService } from './../busca.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmeDetalhe, MovieVideos } from './filme-detalhe';
import { tap, switchMap, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css'],
})
export class FilmeDetalheComponent implements OnInit {

  detalhe: FilmeDetalhe;
  videos: MovieVideos;
  filmes: any;
  constructor(
    private route: ActivatedRoute,
    private buscaService: BuscaService,
    private sanitazier: DomSanitizer
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => this.getDetalhe(params['id']));
  }

  getDetalhe(id) {
    this.buscaService.getDetails(id).pipe(
      tap(detalhe => { this.detalhe = detalhe; console.log(detalhe) }),
      switchMap((result) => this.buscaService.getVideos(id)),
      tap((videos: MovieVideos) => {
        this.videos = videos;
        console.log(videos);
      } ),
      switchMap((video: any) => this.buscaService.getSimilar(video.id)),
      map((similiares: any) => similiares.results)
    ).subscribe((filmes: any) => {
      this.filmes = filmes;
      console.log(filmes);
    } );
  }

  getUrl(key) {
    return this.sanitazier.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }
  getImageHight() {
    let altura = document.getElementById('poster').offsetHeight;
    return altura + 'px';
  }

}
