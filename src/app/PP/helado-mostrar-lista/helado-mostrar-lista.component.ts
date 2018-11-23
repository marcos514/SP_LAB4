import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Sort} from '@angular/material';
import { ServerService } from "../../servicios/server.service";
import * as jsPDF from "jspdf";


export interface Helado {
  tipo: string;
  kilos: string;
  sabor: string;
  id: string;
}
@Component({
  selector: 'app-helado-mostrar-lista',
  templateUrl: './helado-mostrar-lista.component.html',
  styleUrls: ['./helado-mostrar-lista.component.css']
})
export class HeladoMostrarListaComponent implements OnInit {

  constructor(private http:ServerService) { }
  heladoArr:Helado[];
  mostrarArr:Helado[];
  error="";
  ngOnInit() {
    this.heladoArr=[];
    this.http.TomarHelado().subscribe(data=>{
      console.log(data)
      for (let index = 0; index < data["rta"].length; index++) {
        let tipo:string=data["rta"][index].tipo;
        let kilos:string=data["rta"][index].kilos;
        let sabor:string=data["rta"][index].sabor;
        let id:string=data["rta"][index]._id;
        this.heladoArr.push({tipo: tipo,sabor:sabor ,kilos:kilos, id:id});
        
      }
      this.mostrarArr=this.heladoArr;
    },
    err=>{console.log(err);})
  }
  Borrar(id){
    this.http.BorrarHelado(id).subscribe(data=>{
      console.log(data);
      this.error="Elimino"
      this.ngOnInit();
    },
    err=>{console.log(err);})
  }

  sortData(sort: Sort) {
    const data = this.heladoArr.slice();
    if (!sort.active || sort.direction === '') {
      this.mostrarArr = data;
      return;
    }

    this.mostrarArr = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'tipo': return compare(a.tipo, b.tipo, isAsc);
        case 'kilos': return compare(a.kilos, b.kilos, isAsc);
        case 'sabor': return compare(a.sabor, b.sabor, isAsc);
        default: return 0;
      }
    });
  }
  
  @ViewChild("content") content:ElementRef;
  downloadPDF(){
    let doc = new jsPDF();
    let spacialElementHandler={
      "#editor":function(element, renderer){
        return true;
      }

    };
    let content= this.content.nativeElement;
    doc.fromHTML(content.innerHTML,20,20,{
      "width": 500,
      "elementHandlers": spacialElementHandler
    });
    doc.save("test.pdf");
  }

  Error(event){
    this.error=event;
  }

  Encontrado(event){
    this.mostrarArr=event;
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}