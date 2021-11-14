import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientImagePageComponent } from './client-image-page/client-image-page.component';
import { ClientRegisterComponent } from './client-register/client-register.component';

const routes: Routes = [
  {path: 'Login', component: ClientHomeComponent},
  {path: 'Images', component: ClientImagePageComponent},
  {path: 'Register', component: ClientRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientHomeComponent, ClientImagePageComponent, ClientRegisterComponent]
