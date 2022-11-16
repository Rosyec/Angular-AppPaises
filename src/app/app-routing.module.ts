import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './pais/pages/by-capital/by-capital.component';
import { ByPaisComponent } from './pais/pages/by-pais/by-pais.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const rutas: Routes = [
  {
    path: '', component: ByPaisComponent, pathMatch: 'full'
  },
  {
    path: 'region', component: ByRegionComponent

  },
  {
    path: 'capital', component: ByCapitalComponent

  },
  {
    path: 'pais/:id', component: VerPaisComponent

  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
