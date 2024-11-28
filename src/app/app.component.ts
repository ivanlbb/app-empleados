import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  
  // creamos constructor para inyectar el servicio
  constructor(private miServicio: ServicioEmpleadosService){}

  empleados: Empleado[]=[
    new Empleado("Ivan", "Lopez-Baltasar", "Presidente", 80000),
    new Empleado("Ana", "Martin", "Directora", 50000),
    new Empleado("Maria", "Fernandez", "Jefa", 45000),
    new Empleado("Laura", "Lopez", "Administrativo", 15000),
  ];

  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;

  addEmpleado() {
    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Se va a agrevar el empleado: " + empleado.getNombreCompleto());
    this.empleados.push(empleado)
  }
  
}
