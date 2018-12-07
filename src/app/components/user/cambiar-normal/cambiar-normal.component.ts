import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-normal',
  templateUrl: './cambiar-normal.component.html',
  styleUrls: ['./cambiar-normal.component.css']
})
export class CambiarNormalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA5MTI0MjY5MTk2YzA4NzQ1NmQzNDIiLCJub21icmUiOiJtYXJjb3MiLCJ1c2VyIjoibWFyY29zQGdtYWlsLm5vcm1hbCIsInBhc3MiOiIxMjM0IiwicGVyZmlsIjoiTm9ybWFsIiwiaXAiOiI6OmZmZmY6MTkyLjE2OC4yLjQzIiwiaWF0IjoxNTQ0MDk4NDk1fQ.ItwniAlZo3MKf9rth9LKWQfn5nY0Xow0xprJTOKD97I");
    
    this.router.navigate(["/agregarServicio"]);

  }

}
