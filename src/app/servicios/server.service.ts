import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const CONFIG={headers:new HttpHeaders({token:localStorage.getItem("Token")})};
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  public LogIn(email,pass)
  {
    return this.http.post("http://192.168.2.42:3003/login",{cliente:{
      user:email,
      pass:pass,
    }});
  }

  public SignUp(nombre,email,clave,tipo)
  {
    return this.http.post("http://192.168.2.42:3003/clientes",{cliente:
    {
      nombre:nombre,
      user:email,
      pass:clave,
      tipo:tipo

    }});
  }

  public AgregarAuto(patente,marca,color,kilometros,tipo,usuario)
  {
    return this.http.post("http://192.168.2.42:3003/auto",
    {
        auto:{
          patente:patente,
          marca:marca,
          color:color,
          kilometros:kilometros,
          tipo:tipo,
          usuario:usuario,
        }
    },CONFIG);
  }
  public AgregarTurno(dia,horario,mail,patente)
  {
    return this.http.post("http://192.168.2.42:3003/turnos",
    {
      turno:{
          dia:dia,
          horario:horario,
          mail:mail,
          patente:patente
        }
    },CONFIG);
  }

  public TomarTurno()
  {
    return this.http.get("http://192.168.2.42:3003/turnos",CONFIG);
  }

  public TomarPuntuacion()
  {
    return this.http.get("./../../assets/Api_Juegos/puntuacion",CONFIG);
  }
}
