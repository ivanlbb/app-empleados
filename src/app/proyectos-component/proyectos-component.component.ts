import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit{
  constructor(private router: Router, private empleadosService: EmpleadosService){}

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
    //this.router.navigate([''])
    this.volverHome();
  }

  volverHome(){
    this.router.navigate([''])
  }
}
