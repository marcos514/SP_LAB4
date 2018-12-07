import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';
export interface Servidores {
  nombre: string;
  MB: number;
  precio: number;
  mail:string;

}
@Component({
  selector: 'app-mostrar-servidores',
  templateUrl: './mostrar-servidores.component.html',
  styleUrls: ['./mostrar-servidores.component.css']
})
export class MostrarServidoresComponent implements OnInit {

  constructor() { }

  servidores:Servidores[];
  servidores2:Servidores[];
  ngOnInit() {
  }
  mail="";
  
  Mail(event){
    this.mail = event;
    this.servidores2=[]
    for (let index = 0; index < this.servidores.length; index++) {
      if(this.servidores[index].mail ==this.mail){
        this.servidores2.push({nombre:this.servidores[index].nombre,mail:this.mail,MB:this.servidores[index].MB,precio:this.servidores[index].precio});
      }
      
    }
  }
  @Input()
  public set inServidores(servidores2)
  {
    console.log(servidores2)
    this.servidores=servidores2;
    
  }

  sortData(sort: Sort) {
    const data = this.servidores.slice();
    if (!sort.active || sort.direction === '') {
      this.servidores = data;
      return;
    }

    this.servidores = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'mb': return compare(a.MB, b.MB, isAsc);
        case 'precio': return compare(a.precio, b.precio, isAsc);
        default: return 0;
      }
  });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
