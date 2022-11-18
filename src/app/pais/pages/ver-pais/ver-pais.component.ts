import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe( switchMap( ({ id }) =>  this.paisService.getPaisPorId( id )  ), tap( console.log ) )
    .subscribe( { next: (response) => {
      this.pais = response;
    } } );



    // this.activatedRoute.params
    //   .subscribe({
    //     next: ({ id }) => {//Se desestructuró el array, o sea, se extrajo de una vez la propiedad id
    //       this.paisPorCodigo(id);
    //       console.log('Params: ', id)
    //     }
    //   });
  }

  // paisPorCodigo(id: string) {
  //   this.paisService.getPaisPorId(id)
  //     .subscribe(
  //       {
  //         next: (response) => {
  //           this.pais = response;
  //           console.log('Pais-Codigo: ', this.pais)
  //         },
  //         error: (err) => {

  //         }
  // });
  // }

}
