import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-admin',
  templateUrl: './cambiar-admin.component.html',
  styleUrls: ['./cambiar-admin.component.css']
})
export class CambiarAdminComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoibWFyQGdtYWlsLmNvbSIsInRpcG8iOiJBZG1pbiIsIm5vbWJyZSI6Ik1hcmNvcyJ9.Z1-Zk_yKhDpfJgSDrYEjaNx1MYy5FNhqhupJyx_UO8A");
    
    this.router.navigate(["/cargar"]);

  }

}
