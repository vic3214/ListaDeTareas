import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
})
export class ListaTareasComponent {
  tareas: string[] = this.tareasService.listaTareas;
  editTarea: boolean = false;
  index: number = 0;
  nuevaTarea: string = '';
  textNoTareas = '¡No hay tareas que hacer!';

  borraTarea(i: number) {
    this.tareasService.eliminaTarea(i);
  }
  editaTarea(i: number) {
    this.editTarea = true;
    this.index = i;
  }

  guardaTarea(i: number) {
    this.tareas.splice(i, 1, this.nuevaTarea);
    this.editTarea = false;
    this.nuevaTarea = '';
  }

  constructor(private tareasService: TareasService) {}
}
