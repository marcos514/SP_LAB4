import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
export interface Servidores {
  nombre: string;
  MB: number;
  precio: number;
  mail:string;
}
@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {

  constructor(private http: ServerService, private router:Router) { }

  servidores:Servidores[];
  servidores2:Servidores[];
  mail="";
  Mail(event)
  {
    this.mail=event
  }
  ngOnInit() {
    this.servidores=[];
    this.http.TomarServidores().subscribe(data=>{
      console.log(data)
      for (let index = 0; index < data["rta"].length; index++) {
        let nombre:string=data["rta"][index].nombre;
        let mb=data["rta"][index].mb;
        let precio=data["rta"][index].precio;
        let mail=data["rta"][index].mail;
        this.servidores.push({nombre: nombre,precio:precio ,MB:mb,mail:mail});
        
      }
      if(this.servidores.length>0)
      {
        this.precio = 300;
        this.precioMostrar = "Saldra";
      }
    },
    err=>{console.log(err);})
  }
  nombre;
  MB=10;
  agrego;
  precio = 0;
  precioMostrar = "";

  Cargar(){
    console.log(this);
    if(!this.nombre||!this.MB){
      return 0;
    }
    this.http.AgregarServicioWeb(this.nombre, this.MB, this.precio,this.mail).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/agregarServicio"]);
      this.ngOnInit();
      this.agrego="Agrego";
    },
    err=>{console.log(err);
    this.agrego="Error"})

  }
}

