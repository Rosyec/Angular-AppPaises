import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  titulo: string = 'App Paises';

  @ViewChild('btnClose') btnCerrar!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  cerrarSidebar(){
    this.btnCerrar.nativeElement.click();
  }

}
