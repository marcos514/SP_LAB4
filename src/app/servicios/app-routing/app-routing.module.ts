import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import { LoginComponent} from "../../components/user/login/login.component";
import { SignupComponent} from "../../components/user/signup/signup.component";
import { SalirComponent} from "../../salir/salir.component";
import { AutoComponent } from "../../components/auto/auto.component";
import { SacarTurnoComponent } from "../../components/sacar-turno/sacar-turno.component";
import { VerTurnosComponent } from "../../components/ver-turnos/ver-turnos.component";
import { CambiarFreeComponent } from "../../components/user/cambiar-free/cambiar-free.component";
import { CambiarNormalComponent } from "../../components/user/cambiar-normal/cambiar-normal.component";
import { CambiarProfecionalComponent } from "../../components/user/cambiar-profecional/cambiar-profecional.component";
import { AgregarServicioComponent } from "../../SP/agregar-servicio/agregar-servicio.component";
import { CantidadServidoresComponent } from "../../SP/cantidad-servidores/cantidad-servidores.component";
import { CantidadMBComponent } from "../../SP/cantidad-mb/cantidad-mb.component";
import { CantidadMB300Component } from "../../SP/cantidad-mb300/cantidad-mb300.component";
import { ConeccionService } from "../coneccion.service";
 
const rutas : Routes =[
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"salir",component:SalirComponent},
  {path:"cargar",component:AutoComponent,canActivate:[ConeccionService]},
  {path:"sacarTurno",component:SacarTurnoComponent,canActivate:[ConeccionService]},
  {path:"verTurno",component:VerTurnosComponent,canActivate:[ConeccionService]},
  {path:"profecional",component:CambiarProfecionalComponent},
  {path:"normal",component:CambiarNormalComponent},
  {path:"free",component:CambiarFreeComponent},
  {path:"agregarServicio",component:AgregarServicioComponent,canActivate:[ConeccionService]},
  {path:"cantidadServicios",component:CantidadServidoresComponent,canActivate:[ConeccionService]},
  {path:"cantidadMB",component:CantidadMBComponent,canActivate:[ConeccionService]},
  {path:"cantidad300",component:CantidadMB300Component,canActivate:[ConeccionService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
