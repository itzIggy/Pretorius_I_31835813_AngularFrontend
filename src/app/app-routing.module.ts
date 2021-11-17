import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientImagePageComponent } from './client-image-page/client-image-page.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path: '', component: ClientHomeComponent},
  {path: 'Login', component: ClientHomeComponent},
  {path: 'Images', component: ClientImagePageComponent},
  {path: 'Register', component: ClientRegisterComponent},
  {path: 'Upload', component: UploadComponent}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientHomeComponent, UploadComponent, ClientImagePageComponent, ClientRegisterComponent]
