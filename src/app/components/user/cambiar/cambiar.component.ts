import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.component.html',
  styleUrls: ['./cambiar.component.css']
})
export class CambiarComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoibWFyQGdtYWlsLmNvbSIsInRpcG8iOiJDbGllbnRlIiwibm9tYnJlIjoiSm9obiBEb2UiLCJpYXQiOjE4MTcyMzkwMjJ9.7saLuoAenGd5XIZujRFXfEfITJRQvgo0DsbxvFLg3dc");
    this.router.navigate(["/cargar"]);

  }

}
