import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aula',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.css',
})
export class AulaComponent {}
