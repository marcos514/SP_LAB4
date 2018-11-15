import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const CONFIG={headers:new HttpHeaders({token:localStorage.getItem("Token")})};
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  public LogIn(email,pass)
  {
    let usr = '{"nombre":"'+email+'","pass":"'+pass+'"}';

    return this.http.post("./../../assets/Api_Juegos/usuario/login",{usr});
  }

  public SignUp(nombre:string,apellido:string,email:string,pass:string)
  {
    let usr = '{"nombre":"'+nombre+'","email":"'+email+'","pass":"'+pass+'"}';
    return this.http.post("./../../assets/Api_Juegos/usuario/signup",{usr});
  }

  public AgregarPuntuacion(juego:string, puntuacion:string)
  {
    return this.http.post("./../../assets/Api_Juegos/puntuacion",
    {
        juego:juego,
        puntuacion:puntuacion
    },CONFIG);
  }

  public TomarPuntuacion()
  {
    return this.http.get("./../../assets/Api_Juegos/puntuacion",CONFIG);
  }
}
