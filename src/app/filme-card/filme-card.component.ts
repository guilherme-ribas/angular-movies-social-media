import { Component, OnInit, Input } from '@angular/core';
import { Filme } from './filme';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css']
})
export class FilmeCardComponent implements OnInit {

  @Input() filme: Filme;

  constructor() { }

  ngOnInit() {
  }

}
