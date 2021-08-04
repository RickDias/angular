import { Injectable } from '@angular/core';

import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  url_beneficiario = "http://192.168.1.27:8080/dts/datasul-rest/resources/api/fluigrest/api-teste-totvs/busca/02861589060";

  constructor( private http: HttpClient  ) { }

  buscar(){
    return this.http.get<any[]>(`${this.url_beneficiario}`);
  }
}
