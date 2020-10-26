import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';



@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeRoutingModule,
  ]
})
export class HomeModule { }
