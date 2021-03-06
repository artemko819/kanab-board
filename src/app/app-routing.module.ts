import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('../app/pages/home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('../app/pages/auth/auth.module').then((m)=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
