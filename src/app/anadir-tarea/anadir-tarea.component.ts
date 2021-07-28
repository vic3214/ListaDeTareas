import { Component, ElementRef, ViewChild } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-anadir-tarea',
  templateUrl: './anadir-tarea.component.html',
  styleUrls: ['./anadir-tarea.component.css'],
})
export class AnadirTareaComponent {
  @ViewChild('txtAnadirTarea') txtAnadirTarea!: ElementRef<HTMLInputElement>;

  constructor(private tareasService: TareasService) {}

  busca: string = '';

  anadirTarea() {
    const busca = this.txtAnadirTarea.nativeElement.value;
    console.log(busca);
    if (busca.trim().length === 0) {
      return;
    }
    this.tareasService.anadeTarea(busca);
    this.busca = '';
  }
}
