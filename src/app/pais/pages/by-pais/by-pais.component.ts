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
  paises: Pais[] = [];
  error: boolean = false;
  holder: string = 'Buscar país...';
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscar(termino: string) {
    this.error = false;
    this.mostrarSugerencias = false;
    if (termino != '') {
      console.log(termino)
      this.paisService.buscarPais(termino)
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

    } else {
      this.buscarTodos();
    }
  }

  buscarTodos() {
    this.error = false;
    this.paisService.todosLosPaises()
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

  sugerencias(sugerencia: string) {
    this.error = false;
    this.paises = [];
    if (sugerencia != '') {
      this.mostrarSugerencias = true;
      this.paisService.buscarPais(sugerencia).subscribe({
        next: (response) => {
          this.paisesSugeridos = response.splice(0, 6);
        }
      });
    }else{
      this.mostrarSugerencias = false;
      this.buscarTodos();
    }

  }

}
