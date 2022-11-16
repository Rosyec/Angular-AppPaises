import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styleUrls: ['./by-pais.component.css']
})
export class ByPaisComponent implements OnInit {
  termino: string = '';
  paises: Pais[] = [];
  error: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  input() {
    this.error = false;
    console.log(this.termino)
    this.paisService.buscarPais(this.termino)
      .subscribe(
        {
          next: (response) => {
            this.paises = response;
            console.log('Paises: ', this.paises);
          },
          error: (err: HttpErrorResponse) => {
            this.errorResponse(err);
            console.log('Error Status: ', err.status)
          },
        });
  }

  errorResponse(error: HttpErrorResponse) {
    if (error.status == HttpStatusCode.NotFound) {
      this.paises = [];
      this.error = true;
    }
  }

}
