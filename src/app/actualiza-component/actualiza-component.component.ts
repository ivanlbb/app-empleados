import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute, private empleadosService: EmpleadosService){}

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id']
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice)
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroNombre = empleado.nombre;
    this.cuadroSalario = empleado.salario;
  }

  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;
  empleados: Empleado[];
  indice: number;

  actualizaEmpleado() {
    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);    
    this.empleadosService.actualizarEmpleado(this.indice, empleado);
    //this.router.navigate([''])
    this.volverHome();
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.volverHome();
  }
    
  volverHome(){
    this.router.navigate([''])
  }

}
