import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
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
