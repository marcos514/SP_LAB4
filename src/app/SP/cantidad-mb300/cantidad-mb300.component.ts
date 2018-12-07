import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';
import { ServerService } from 'src/app/servicios/server.service';
export interface Servidores {
  mail: string;
  mb: number;
  nombre:string;
}
@Component({
  selector: 'app-cantidad-mb300',
  templateUrl: './cantidad-mb300.component.html',
  styleUrls: ['./cantidad-mb300.component.css']
})
export class CantidadMB300Component implements OnInit {
  constructor(private http: ServerService) { }
  servidores:Servidores[];
  servidores2:Servidores[];
  ngOnInit() {
    this.servidores=[];
    this.http.TomarServidores().subscribe(data=>{
      console.log(data)
      for (let index = 0; index < data["rta"].length; index++) {
        let mail:string=data["rta"][index].mail;
        let mb:number=data["rta"][index].mb;
        let nombre:string=data["rta"][index].nombre;
        if(mb>300)
        {
          this.servidores.push({mail:mail,mb: mb,nombre:nombre});
        }

        
      }
    },
    err=>{console.log(err);})

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
        case 'nombre': return compare(a.mail, b.mail, isAsc);
        case 'mb': return compare(a.mb, b.mb, isAsc);
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        default: return 0;
      }
  });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}