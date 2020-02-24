import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmeListaComponent } from './filme-lista/filme-lista.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FilmeDescricaoPipe } from './filme-card/filme-descricao.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmeListaComponent,
    FilmeCardComponent,
    FilmeDescricaoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
