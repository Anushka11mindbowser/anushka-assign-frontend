import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';


const routes: Routes = [
  {
    path:'success-page', component:SuccessPageComponent
  },
  {
    path:'home-page', component:HomePageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
