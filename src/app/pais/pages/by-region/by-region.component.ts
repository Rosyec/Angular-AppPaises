import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) {}

  ngOnInit(): void {
    this.activarRegion( 'africa' );
  }

  activarRegion( region:string ){
    if (region == this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.buscarPorRegion( region );
  }

  getClassCSS( region:string ){
    return (region == this.regionActiva)?  'btn myBtn' : 'btn btn-outline-primary';
  }

  buscarPorRegion( region: string ){
    this.paisService.buscarRegion( region ).subscribe( { next: (response) => {
      this.paises = response;
      console.log(response);
    } } );
  }

}
