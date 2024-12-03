import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL_DATOS = "https://mis-clientes-e9e04-default-rtdb.europe-west1.firebasedatabase.app/datos.json";

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  cargarEmpleados(): Observable<any>{
    const token = this.loginService.getIdToken();
    return this.httpClient.get<any>(this.URL_DATOS+'?auth='+token);
  }

  guardarEmpleados(empleados: Empleado[]){
    console.log(empleados);
    //url de firebase https://mis-clientes-e9e04-default-rtdb.europe-west1.firebasedatabase.app/
    this.httpClient.put(this.URL_DATOS, empleados).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('Array de empleados guardado') 
    })
  }

  actualizarEmpleados(indice: number, empleado: Empleado){
    let url = "https://mis-clientes-e9e04-default-rtdb.europe-west1.firebasedatabase.app/datos/"+indice+".json";
    this.httpClient.put(url, empleado).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('Modificación completada') 
    })
  
  }

  eliminarEmpleado(indice: number) {
    let url = "https://mis-clientes-e9e04-default-rtdb.europe-west1.firebasedatabase.app/datos/"+indice+".json";
    this.httpClient.delete(url).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('Empleado eliminado') 
    })
  }

}
