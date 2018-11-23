import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';

export interface Helado {
  tipo: string;
  kilos: string;
  sabor: string;
}
@Component({
  selector: 'app-helado-filtrar',
  templateUrl: './helado-filtrar.component.html',
  styleUrls: ['./helado-filtrar.component.css']
})
export class HeladoFiltrarComponent implements OnInit {

  constructor() { }
  ret;
  helados:Helado[];
  saborBuscar;
  @Output() encontrado = new EventEmitter();
  @Output() error = new EventEmitter<string>();
  ngOnInit() {
  }

  Filtrar()
  {
    this.ret=this.helados;
    if(this.saborBuscar){
      this.ret=[];
      for (let index = 0; index < this.helados.length; index++) {
        if(this.helados[index].sabor.includes(this.saborBuscar)){
          this.ret.push(this.helados[index]);
        }
      }
      if(this.ret.length ==0)
      {
        this.error.emit("Error helado sabor: "+ this.saborBuscar+" no encontrado");
      }
      else{
        this.encontrado.emit(this.ret);
      }

    }

  }
  @Input()
  public set helado(heladoArr)
  {
    this.helados=heladoArr;
    
  }

}
