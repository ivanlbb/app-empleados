import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css'
})
export class CaracteristicasEmpleadoComponent {
  constructor(private miServicio: ServicioEmpleadosService){}

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristicas(value: string){
    this.miServicio.muestraMensaje("Se va a agregar la característica: " + value);
    this.caracteristicasEmpleado.emit(value);
  }
}
