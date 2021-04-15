import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SolicitudRenovacionComponent } from './pages/tipos/solicitud-renovacion/solicitud-renovacion.component';
import { SolicitudAutorizacionComponent } from './pages/tipos/solicitud-autorizacion/solicitud-autorizacion.component';


import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { TiposComponent } from './pages/tipos/tipos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SolicitudRenovacionComponent,
    SolicitudAutorizacionComponent,
    InicioComponent,
    TramitesComponent,
    TiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
