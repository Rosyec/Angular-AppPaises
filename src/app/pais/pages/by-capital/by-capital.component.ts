import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {
  paises: Pais[] = [];
  error: boolean = false;
  holder: string = 'Buscar capítal...';
  tipo: number = 1;

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscar(termino: string) {
    this.error = false;
    if (termino != '') {
      this.paisService.buscarCapital(termino)
        .subscribe(
          {
            next: (response) => { this.paises = response },
            error: (err) => { this.errorResponse(err) }
          });

    }else{
      this.buscarTodos();
    }
  }

  errorResponse(error: HttpErrorResponse) {
    if (error.status == HttpStatusCode.NotFound) {
      this.paises = [];
      this.error = true;
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

  // sugerencias( sugerencia: string ){
  //   this.error = false;
  //   this.buscar( sugerencia );
  // }

}
