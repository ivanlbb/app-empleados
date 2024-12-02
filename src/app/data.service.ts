import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  guardarEmpleados(empleados: Empleado[]){
    //url de firebase https://mis-clientes-e9e04-default-rtdb.europe-west1.firebasedatabase.app/
    this.httpClient.post("https://mis-clientes-e9e04-default-rtdb.europe-west1.firebasedatabase.app/datos.json", empleados).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }
}
