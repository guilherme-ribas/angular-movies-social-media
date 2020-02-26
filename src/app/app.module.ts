import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { FilmeListaComponent } from './filme-lista/filme-lista.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FilmePipe } from './filme-card/filme.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmeListaComponent,
    FilmeCardComponent,
    FilmePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
