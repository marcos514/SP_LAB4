import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//animationes de Angular materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialsModule} from "./materials";
import { SignupComponent,FaltaCamposComponent } from './components/user/signup/signup.component';
import { LoginComponent,MailErrorComponent, NoPassComponent } from './components/user/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MathComponent } from './components/juegos/math/math.component';
import { AppRoutingModule } from "./servicios/app-routing/app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from "./servicios/server.service";
import { ConeccionService } from "./servicios/coneccion.service";
import { TatetiComponent,XComponent,OComponent } from './components/juegos/tateti/tateti.component';
import { PalabrasComponent } from './components/juegos/palabras/palabras.component';
import { InicioComponent } from './inicio/inicio.component';
import { PuntuacionesComponent } from './puntuaciones/puntuaciones.component';
import { SalirComponent } from './salir/salir.component';
import { AutoComponent } from './components/auto/auto.component';
import { SacarTurnoComponent } from './components/sacar-turno/sacar-turno.component';
import { VerTurnosComponent } from './components/ver-turnos/ver-turnos.component';
import { DatosUsuarioComponent } from './components/user/datos-usuario/datos-usuario.component';
import { NombreComponent } from './components/user/nombre/nombre.component';
import { CambiarComponent } from './components/user/cambiar/cambiar.component';
import { CambiarAdminComponent } from './components/user/cambiar-admin/cambiar-admin.component';
import { HeladoAgregarComponent } from './PP/helado-agregar/helado-agregar.component';
import { HeladoMostrarListaComponent } from './PP/helado-mostrar-lista/helado-mostrar-lista.component';
import { HeladoMostrarInputComponent } from './PP/helado-mostrar-input/helado-mostrar-input.component';
import { HeladoMostrarInputGenerarComponent } from './PP/helado-mostrar-input-generar/helado-mostrar-input-generar.component';
import { HeladoFiltrarComponent } from './PP/helado-filtrar/helado-filtrar.component';
import { CambiarProfecionalComponent } from './components/user/cambiar-profecional/cambiar-profecional.component';
import { CambiarNormalComponent } from './components/user/cambiar-normal/cambiar-normal.component';
import { CambiarFreeComponent } from './components/user/cambiar-free/cambiar-free.component';
import { AgregarServicioComponent } from './SP/agregar-servicio/agregar-servicio.component';
import { AreaClientesComponent } from './SP/area-clientes/area-clientes.component';
import { MostrarServidoresComponent } from './SP/mostrar-servidores/mostrar-servidores.component';
import { PipeCambioPipe } from './SP/pipe-cambio.pipe';
import { PipeMBPipe } from './SP/pipe-mb.pipe';
import { AgregarClienteComponent } from './SP/agregar-cliente/agregar-cliente.component';
import { CantidadServidoresComponent } from './SP/cantidad-servidores/cantidad-servidores.component';
import { CantidadMBComponent } from './SP/cantidad-mb/cantidad-mb.component';
import { CantidadMB300Component } from './SP/cantidad-mb300/cantidad-mb300.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    MathComponent,
    MailErrorComponent,
    NoPassComponent,
    FaltaCamposComponent,
    TatetiComponent,
    XComponent,
    OComponent,
    PalabrasComponent,
    InicioComponent,
    PuntuacionesComponent,
    SalirComponent,
    AutoComponent,
    SacarTurnoComponent,
    VerTurnosComponent,
    DatosUsuarioComponent,
    NombreComponent,
    CambiarComponent,
    CambiarAdminComponent,
    HeladoAgregarComponent,
    HeladoMostrarListaComponent,
    HeladoMostrarInputComponent,
    HeladoMostrarInputGenerarComponent,
    HeladoFiltrarComponent,
    CambiarProfecionalComponent,
    CambiarNormalComponent,
    CambiarFreeComponent,
    AgregarServicioComponent,
    AreaClientesComponent,
    MostrarServidoresComponent,
    PipeCambioPipe,
    PipeMBPipe,
    AgregarClienteComponent,
    CantidadServidoresComponent,
    CantidadMBComponent,
    CantidadMB300Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServerService,ConeccionService],
  bootstrap: [AppComponent],
  entryComponents: [
    MailErrorComponent,
    NoPassComponent,
    FaltaCamposComponent,
    XComponent,
    OComponent
]
})
export class AppModule { }
