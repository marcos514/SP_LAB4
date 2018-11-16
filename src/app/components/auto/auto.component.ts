import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();

  patente="";
  marca="";
  color="";
  kilometros:Number;
  tipo="auto";
  usuario="";
  agrego=""

  Cargar(){
    this.http.AgregarAuto(this.patente,this.marca,this.color,this.kilometros,this.tipo,this.usuario).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/cargar"]);
      this.ngOnInit();
      this.agrego="Agrego";
    },
    err=>{console.log(err);
    this.agrego="Error"})

  }

  ngOnInit() {
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.usuario=token.usuario
    }
    this.agrego=""
    this.patente="";
    this.marca="";
    this.color="";
    this.kilometros=0;
    this.tipo="auto";

  }

}