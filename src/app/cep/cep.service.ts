import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {

  constructor(private http: HttpClient) { }

  urlCepAPi = "http://viacep.com.br/ws/"

  getCep(cepParam: string): Observable<any> {
    return this.http.get(this.urlCepAPi + "" + cepParam + "/json/")
  }

}

