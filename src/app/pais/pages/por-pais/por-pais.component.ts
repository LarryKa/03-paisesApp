import { Component, OnInit } from '@angular/core';
import { PaisService } from './../../services/pais.service';
import { Country } from '../../interfaces/paise.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.hayError = false;    

    this.paisService.buscarPais( termino ).subscribe(
      (paises) => {        
        this.paises = paises;                
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias( termino: string ){
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
