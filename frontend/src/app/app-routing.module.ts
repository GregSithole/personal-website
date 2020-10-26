import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from 'src/app/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home-routing.module').then(m => m.HomeRoutingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
