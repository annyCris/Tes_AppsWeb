import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  /**ATRIBUTOS**/

  //Para obtener los datos del usuario que inicie sersión
  token:string;
  idOTE:string;
  nombreOTE:string;

  constructor() { }

}