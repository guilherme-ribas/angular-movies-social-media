import { HomeComponent } from './home/home.component';
import { FilmeDetalheComponent } from './filme-detalhe/filme-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home/movie/0', pathMatch: 'full'},
  {path: 'home/:tipo/:busca', component: HomeComponent},
  {path: 'detalhe/:id', component: FilmeDetalheComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
