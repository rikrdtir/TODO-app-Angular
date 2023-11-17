import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[] = [];
  nombreTarea = '';
  description = '';

  agregarTarea() {
    // crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      description: this.description,
      estado: false,
    }
    // agregar el objeto tarea al array this.listaTareas
    this.listaTareas.push(tarea);

    // limpiar el from
    this.nombreTarea = '';
    this.description = '';
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listaTareas[index].estado = !tarea.estado
  }
}
