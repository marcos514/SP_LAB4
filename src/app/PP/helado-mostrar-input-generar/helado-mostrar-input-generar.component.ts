import { Component, OnInit } from '@angular/core';
import { ServerService } from "../../servicios/server.service";

export interface Helado {
  tipo: string;
  kilos: string;
  sabor: string;
}
@Component({
  selector: 'app-helado-mostrar-input-generar',
  templateUrl: './helado-mostrar-input-generar.component.html',
  styleUrls: ['./helado-mostrar-input-generar.component.css']
})
export class HeladoMostrarInputGenerarComponent implements OnInit {
  helados:Helado[];
  ret;
  saborBuscar;
  constructor(private http:ServerService) { }

  ngOnInit() {
    this.helados=[];
    this.http.TomarHelado().subscribe(data=>{
      console.log(data)
      for (let index = 0; index < data["rta"].length; index++) {
        let tipo:string=data["rta"][index].tipo;
        let kilos:string=data["rta"][index].kilos;
        let sabor:string=data["rta"][index].sabor;
        this.helados.push({tipo: tipo,sabor:sabor ,kilos:kilos});
        
      }
    },
    err=>{console.log(err);})
  }

  Filtrar()
  {
    this.ret=[];
    if(this.saborBuscar){
      this.ret=[];
      for (let index = 0; index < this.helados.length; index++) {
        if(this.helados[index].sabor.includes(this.saborBuscar)){
          this.ret.push(this.helados[index]);
        }
      }

    }

  }

}
