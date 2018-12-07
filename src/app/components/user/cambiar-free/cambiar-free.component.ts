import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-free',
  templateUrl: './cambiar-free.component.html',
  styleUrls: ['./cambiar-free.component.css']
})
export class CambiarFreeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA5MTMxODY5MTk2YzA4NzQ1NmQzNDQiLCJub21icmUiOiJtYXJjb3MiLCJ1c2VyIjoibWFyY29zQGdtYWlsLmZyZWUiLCJwYXNzIjoiMTIzNCIsInBlcmZpbCI6IkZyZWUiLCJpcCI6Ijo6ZmZmZjoxOTIuMTY4LjIuNDMiLCJpYXQiOjE1NDQwOTg1OTB9.ZtGr75VgwI7yHaIGxms8L_VZgKOhHPlpS8rsJWJQxDg");
    
    this.router.navigate(["/agregarServicio"]);

  }

}
