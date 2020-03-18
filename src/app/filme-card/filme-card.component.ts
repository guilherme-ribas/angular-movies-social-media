import { BuscaService } from './../busca.service';
import { Component, OnInit, Input } from '@angular/core';
import { Filme } from './filme';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css']
})
export class FilmeCardComponent implements OnInit {

  @Input() filme: Filme;

  constructor(private buscaService: BuscaService) { }

  ngOnInit() {
  }

  detalhar() {
    this.buscaService.getDetails(this.filme.id).subscribe(filme => console.log(filme));
  }

}
