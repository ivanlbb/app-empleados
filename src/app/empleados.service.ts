import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioAlert: ServicioEmpleadosService) { }
  
  empleados: Empleado[]=[
    new Empleado("Ivan", "Lopez-Baltasar", "Presidente", 80000),
    new Empleado("Ana", "Martin", "Directora", 50000),
    new Empleado("Maria", "Fernandez", "Jefa", 45000),
    new Empleado("Laura", "Lopez", "Administrativo", 15000),
  ];

  agregarEmpleadoServicio(empleado: Empleado){   
    this.servicioAlert.muestraMensaje("Se va a agrevar el empleado: " + empleado.getNombreCompleto() +
                                    "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado)
  }

  encontrarEmpleado(indice: number): Empleado {
    return this.empleados[indice];
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice]
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.salario = empleado.salario;
    empleadoModificado.cargo = empleado.cargo;
  }

}
