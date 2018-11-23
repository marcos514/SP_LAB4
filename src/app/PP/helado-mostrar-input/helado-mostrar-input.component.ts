import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material';


export interface Helado {
  tipo: string;
  kilos: string;
  sabor: string;
}

@Component({
  selector: 'app-helado-mostrar-input',
  templateUrl: './helado-mostrar-input.component.html',
  styleUrls: ['./helado-mostrar-input.component.css']
})
export class HeladoMostrarInputComponent implements OnInit {
  helados:Helado[];
  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set inHelado(ret)
  {
    this.helados=ret;
    
  }

  sortData(sort: Sort) {
    const data = this.helados.slice();
    if (!sort.active || sort.direction === '') {
      this.helados = data;
      return;
    }

    this.helados = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'tipo': return compare(a.tipo, b.tipo, isAsc);
        case 'kilos': return compare(a.kilos, b.kilos, isAsc);
        case 'sabor': return compare(a.sabor, b.sabor, isAsc);
        default: return 0;
      }
    });
  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}