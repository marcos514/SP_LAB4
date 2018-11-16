import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";

export interface ClienteServ {
  dia: string;
  hora: string;
  patente: string;
}
@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  tipo="";
  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();
  mail="";
  clienteArr:ClienteServ[];

  ngOnInit() {
    this.clienteArr=[];
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.tipo=token.tipo = "Cliente";
      this.mail=token.user;
    }
    this.http.TomarTurno().subscribe(data=>{
      console.log(data["rta"]);
      for (let index = 0; index < data["rta"].length; index++) {
        let hora:string=data["rta"][index].horario;
        let dia:string=data["rta"][index].dia;
        let patente:string=data["rta"][index].patente;
        this.clienteArr.push({hora: hora ,dia: dia,patente: patente});
        
      }
      console.log(this.clienteArr)
    },
    err=>{console.log(err);})
  }

}
