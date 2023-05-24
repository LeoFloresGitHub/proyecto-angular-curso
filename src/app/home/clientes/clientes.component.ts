import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from 'src/entities/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: Clientes[] | undefined;
  clientesFilter: any = { nombres: ''};
  p:number = 1;
  order: string = 'nombres';
  reversa: boolean = false;

  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientesService.clientesSelect().subscribe(
      (res) => {
        this.listaClientes = JSON.parse(JSON.stringify(res))
      }
    )
  }
  setOrder(nombreColumna: string){
    if(this.order === nombreColumna){
      this.reversa = !this.reversa
    }
   this.order = nombreColumna
   console.log(this.order)
 }
 setMost(nombreColumna: String){
   
 }


}
