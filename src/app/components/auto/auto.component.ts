import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  constructor(private router:Router) { }
  patente="";
  marca="";
  color="";
  kilometros:Number;
  tipo="auto";

  ngOnInit() {
  }

}
