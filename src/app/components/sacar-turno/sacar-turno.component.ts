import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {

  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();
  usuario="";
  agrego="";
  patente="";
  dia;
  horario;
  mail="";
  Cargar(){
    this.http.AgregarTurno(this.dia,this.horario,this.mail,this.patente).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
      this.agrego="Agrego";
    },
    err=>{console.log(err);
    this.agrego="Error"})

  }

  ngOnInit() {
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.usuario=token.tipo;
      this.mail=token.user;
    }
    
    if(this.usuario=="Admin"){
      this.router.navigate(["/verTurnos"]);
    }
    this.agrego=""
  }

}
