import { Routes } from '@angular/router';
import { SolicitudRenovacionComponent } from './solicitud-renovacion/solicitud-renovacion.component';
import { SolicitudAutorizacionComponent } from './solicitud-autorizacion/solicitud-autorizacion.component';


export const TipoRoutes: Routes = [


    { path: 'renovacion', component: SolicitudRenovacionComponent },
    { path: 'autorizacion', component: SolicitudAutorizacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'renovacion'}

];


