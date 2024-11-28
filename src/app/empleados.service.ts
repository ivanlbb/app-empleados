import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }
  
  empleados: Empleado[]=[
    new Empleado("Ivan", "Lopez-Baltasar", "Presidente", 80000),
    new Empleado("Ana", "Martin", "Directora", 50000),
    new Empleado("Maria", "Fernandez", "Jefa", 45000),
    new Empleado("Laura", "Lopez", "Administrativo", 15000),
  ];

  agregarEmpeadoServicio(empleado: Empleado){
    this.empleados.push(empleado)
  }
}
