import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/servicios/server.service';
import { Sort } from '@angular/material';

export interface Servidores {
  mail: string;
  servidores: number;

}
@Component({
  selector: 'app-cantidad-servidores',
  templateUrl: './cantidad-servidores.component.html',
  styleUrls: ['./cantidad-servidores.component.css']
})
export class CantidadServidoresComponent implements OnInit {

  constructor(private http: ServerService) { }
  servidores:Servidores[];
  ngOnInit() {
    this.servidores=[];
    this.http.TomarServidores().subscribe(data=>{
      console.log(data)
      for (let index = 0; index < data["rta"].length; index++) {
        let mail:string=data["rta"][index].mail;
        let encontro =true;
        for (let index = 0; index < this.servidores.length; index++) {
          if( this.servidores[index].mail == mail){
            this.servidores[index].servidores +=1;
            encontro=false;
          }
        }
        if(encontro)
        {
          this.servidores.push({mail:mail, servidores:1});
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
        case 'cantidad': return compare(a.servidores, b.servidores, isAsc);
        default: return 0;
      }
  });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
