import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";

export interface ClienteServ {
  dia: string;
  mail: string;
  hora: string;
}
@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  tipo;
  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();
  mail="";
  clienteArr:ClienteServ[];
  mostrarArr:ClienteServ[];
  palabraBuscar;
  ngOnInit() {
    this.clienteArr=[];
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.tipo=token.tipo == "Cliente";
      this.mail=token.user;
    }
    this.http.TomarTurno().subscribe(data=>{
      for (let index = 0; index < data["rta"].length; index++) {
        let hora:string=data["rta"][index].horario;
        let dia:string=data["rta"][index].dia;
        let mail:string=data["rta"][index].mail;
        this.clienteArr.push({hora: hora,mail: mail ,dia: dia});
        
      }
      this.mostrarArr=this.clienteArr;
    },
    err=>{console.log(err);})
  }

  Filtrar()
  {
    if(!this.palabraBuscar){
      this.mostrarArr=[];
      for (let index = 0; index < this.clienteArr.length; index++) {
        if(this.clienteArr[index].mail){
          this.mostrarArr.push(this.clienteArr[index]);
        }
        
      }
    }
    else{
      this.mostrarArr=this.clienteArr;
    }

  }

}
