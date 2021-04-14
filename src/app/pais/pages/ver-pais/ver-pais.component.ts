import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PaisService } from './../../services/pais.service';
import { Country } from '../../interfaces/paise.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService  
  ) { }

  ngOnInit(): void {   

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) )
        )
        .subscribe(
          resp => {
            console.log( resp );
          }
        )
    
  }

}
