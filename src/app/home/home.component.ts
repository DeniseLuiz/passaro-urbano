import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ofertas: Array<Oferta> = [];


  ngOnInit(): void {
   this.ofertas = this.ofertasService.getOfertas();
   console.log(this.ofertas);
   let teste = this.ofertas[0].imagens[0].url
   console.log(teste)
  }

}
