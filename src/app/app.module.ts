import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    ModalUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatCommonModule,
    MatDialogModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
