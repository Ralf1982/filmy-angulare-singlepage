import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';

import { FilmyService } from './filmy.service';
import { DetaleComponent } from './detale/detale.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
