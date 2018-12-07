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
