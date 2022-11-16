import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    SidebarComponent,
    FooterComponent,
    ContenedorComponent
  ]
})
export class SharedModule { }
