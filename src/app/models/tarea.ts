export class Tarea {
  nombre: string;
  description?: string;
  estado: boolean;

  constructor(nombre: string, description: string, estado: boolean) {
    this.nombre = nombre;
    this.description = description;
    this.estado = estado;
  }
}
