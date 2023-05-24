import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { BanerComponent } from './home/baner/baner.component';
import { JuntarComponent } from './home/juntar/juntar.component';
import { NewsComponent } from './home/news/news.component';
import { HttpClientModule} from '@angular/common/http';
import { ClientesComponent } from './home/clientes/clientes.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainHeaderComponent,
    MainFooterComponent,
    BanerComponent,
    JuntarComponent,
    NewsComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
