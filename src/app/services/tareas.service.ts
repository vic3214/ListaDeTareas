import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor() {}

  tareas: string[] = [];

  get listaTareas() {
    return this.tareas;
  }

  anadeTarea(tarea: string) {
    this.tareas.push(tarea);
  }

  eliminaTarea(i: number) {
    this.tareas.splice(i, 1);
  }
}
