import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UrlPrincipalService} from "../url-principal.service";

@Injectable()
export class AuthEstudianteService {

  //Atributos
  url:string;
  modelo='AuthEstudiante'

  constructor(private _http:Http, private _urlPrincipal:UrlPrincipalService) {
    this.url=this._urlPrincipal.url+this.modelo;
  }

  logIn(cedula:string, contrasenia:string){
    let metodo='/logIn'
    let datosEnviar ={
      cedula,
      contrasenia:contrasenia
    };
    return this._http.post(this.url+metodo,datosEnviar)
  }

}