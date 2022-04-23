import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecaoJogos } from '../models/secao-jogos';

@Injectable({
  providedIn: 'root'
})
export class SecaoJogosService {

  url = "http://localhost:3000/secao-jogos"

  constructor(private httpClient: HttpClient) { }

  getSecaoJogos(): Observable<SecaoJogos[]>{
    return this.httpClient.get<SecaoJogos[]>(this.url)
  }
}
