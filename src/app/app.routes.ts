import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AulaComponent } from './pages/aula/aula.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { MaterialesComponent } from './pages/aula/materiales/materiales.component';
import { AvisosComponent } from './pages/aula/avisos/avisos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

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
      { path: 'avisos', component: AvisosComponent },
    ],
  },
  { path: 'ayuda', component: AyudaComponent },
  { path: '**', component: NoEncontradoComponent },
];
