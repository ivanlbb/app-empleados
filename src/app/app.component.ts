import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  titulo = 'Listado de Empleados';
  
  // creamos constructor para inyectar los servicios
  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){
    //podemos asignar el valor aqui o en onInit
    //this.empleados = empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;
  empleados: Empleado[];

  addEmpleado() {
    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);    
    this.empleadosService.agregarEmpleadoServicio(empleado);
  }
  
}
