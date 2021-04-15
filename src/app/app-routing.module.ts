import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudRenovacionComponent } from './pages/tramites/solicitud-renovacion/solicitud-renovacion.component';
import { SolicitudAutorizacionComponent } from './pages/tramites/solicitud-autorizacion/solicitud-autorizacion.component';


const routes: Routes = [
  {path: 'renovacion', component: SolicitudRenovacionComponent},
  {path: 'autorizacion', component: SolicitudAutorizacionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'renovacion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
