import { BuscaService } from './../busca.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmeDetalhe } from './filme-detalhe';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit {

  detalhe: FilmeDetalhe;

  constructor(
    private route: ActivatedRoute,
    private buscaService: BuscaService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => this.getDetalhe(params['id']));
  }

  getDetalhe(id){
    this.buscaService.getDetails(id).subscribe(detalhe => this.detalhe = detalhe);
  }

}
