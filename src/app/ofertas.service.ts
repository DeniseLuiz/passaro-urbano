import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  ofertas: Array<Oferta> = []

  getOfertas(): Promise<Oferta[]>{
    return this.http.get('http://localhost:3000/ofertas')
      .toPromise()
      .then((resposta: any)=>resposta)
  }
}
