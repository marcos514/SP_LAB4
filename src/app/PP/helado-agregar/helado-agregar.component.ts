import { Component, OnInit } from '@angular/core';
import { ServerService } from "../../servicios/server.service";

@Component({
  selector: 'app-helado-agregar',
  templateUrl: './helado-agregar.component.html',
  styleUrls: ['./helado-agregar.component.css']
})
export class HeladoAgregarComponent implements OnInit {
  tipo;
  kilos=10;
  sabor;
  agrego="";
  constructor(private http:ServerService) { }

  ngOnInit() {
    this.tipo="";
    this.kilos=10;
    this.sabor="";
  }
  Cargar(){
    console.log(this);
    if(!this.tipo||!this.kilos||!this.sabor){
      this.agrego="Error";      
      return 0;
    }
    this.http.AgregarHelado(this.tipo,this.sabor,this.kilos).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
      this.agrego="Agrego";
    },
    err=>{console.log(err);
    this.agrego="Error"})

  }

}
