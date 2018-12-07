import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-profecional',
  templateUrl: './cambiar-profecional.component.html',
  styleUrls: ['./cambiar-profecional.component.css']
})
export class CambiarProfecionalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA5MTEwZTY5MTk2YzA4NzQ1NmQzNDAiLCJub21icmUiOiJtYXJjb3MiLCJ1c2VyIjoibWFyY29zQGdtYWlsLmNvbSIsInBhc3MiOiIxMjM0IiwicGVyZmlsIjoiUHJvZmVzaW9uYWwiLCJpcCI6Ijo6ZmZmZjoxOTIuMTY4LjIuNDMiLCJpYXQiOjE1NDQwOTgyMDV9.XXq84nMIVCwSH_wMZHdageyozinkBMt63wmCCHL6wZ4");
    
    this.router.navigate(["/agregarServicio"]);

  }

}
