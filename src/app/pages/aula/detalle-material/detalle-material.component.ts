import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-material',
  imports: [AsyncPipe],
  templateUrl: './detalle-material.component.html',
  styleUrl: './detalle-material.component.css'
})
export class DetalleMaterialComponent {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  readonly id$ = inject(ActivatedRoute).paramMap.pipe(
    map(params => params.get('id'))
  );
}
