import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { TipoRoutes } from './pages/tipos/tipo-routing.module';
import { TiposComponent } from './pages/tipos/tipos.component';
import { TramitesComponent } from './pages/tramites/tramites.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'tramites', component: TramitesComponent,},
  {path: 'tipos', component: TiposComponent, children: TipoRoutes},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
