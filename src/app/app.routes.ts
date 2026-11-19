import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AulaComponent } from './pages/aula/aula.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { MaterialesComponent } from './pages/aula/materiales/materiales.component';
import { AvisosComponent } from './pages/aula/avisos/avisos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { DetalleMaterialComponent } from './pages/aula/detalle-material/detalle-material.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'portal', redirectTo: '/aula', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'aula',
    component: AulaComponent,
    children: [
      { path: '', redirectTo: 'materiales', pathMatch: 'full' },
      { path: 'materiales', component: MaterialesComponent },
      { path: 'materiales/:id', component: DetalleMaterialComponent },
      { path: 'avisos', component: AvisosComponent },
    ],
  },
  {
    path: 'antiguo-material/:id',
    redirectTo: '/aula/materiales/:id',
    pathMatch: 'full'
  },
  { path: 'ayuda', component: AyudaComponent },
  { path: '**', component: NoEncontradoComponent },
];
