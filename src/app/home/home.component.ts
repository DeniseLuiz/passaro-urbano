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
  mensagem: string = ''


  ngOnInit(): void {
  this.ofertasService.getOfertas()
    .then((ofertas: Oferta[])=>{
      this.ofertas = ofertas
      console.log(this.ofertas)
    })
    .catch((error: any)=>{
      console.log(error)
    });
  }
}
