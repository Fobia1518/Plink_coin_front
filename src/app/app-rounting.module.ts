import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { AppComponent } from './app.component';
import { ListarMonedasComponent } from './components/listar-monedas/listar-monedas.component';
import { RealizarCambioComponent } from './components/realizar-cambio/realizar-cambio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
   {path: '', component: IndexComponent},
   {path: 'listar-monedas', component: ListarMonedasComponent},
   {path: 'realizar-cambio', component: RealizarCambioComponent},
   {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
