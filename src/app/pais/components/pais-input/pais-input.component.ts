import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  termino: string = '';

  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() myPlaceHolder: string = '';

  @Input() tipoConsulta: number = 0;

  
  debouncer: Subject<string> = new Subject();
  
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
      console.log(valor);
    } );
  }

  input(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

  botonPresionado(){
    this.debouncer.next( this.termino );
  }

}