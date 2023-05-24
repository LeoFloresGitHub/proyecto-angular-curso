import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleados } from 'src/entities/empleados';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  listaEmpleados: Empleados[] | undefined;

  
  constructor(private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.empleadosSelect().subscribe(
      (res) => {
        this.listaEmpleados = JSON.parse(JSON.stringify(res))
      }
    )
  }


}
