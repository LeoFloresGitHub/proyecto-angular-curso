import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './home/clientes/clientes.component';
import { JuntarComponent } from './home/juntar/juntar.component';

const routes: Routes = [
//Path=ruta
{path: '',component: JuntarComponent,},
{path: 'about',component: ClientesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
