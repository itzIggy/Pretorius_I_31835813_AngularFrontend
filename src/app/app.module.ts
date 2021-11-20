import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './client-home/LoginCredentials.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { DragNDropDirective } from './upload/dragNdrop.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DragNDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
