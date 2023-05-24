import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  clientesSelect(){
    const ruta="https://servicios.campus.pe/servicioclientes.php"
    return this.http.get(ruta);
  }
}
