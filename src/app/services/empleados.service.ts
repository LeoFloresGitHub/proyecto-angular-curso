import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }
  empleadosSelect(){
    const ruta="https://servicios.campus.pe/servicioempleados.php"
    return this.http.get(ruta);
  }
}
