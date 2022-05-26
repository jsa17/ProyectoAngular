import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HilosComponent } from './components/hilos/hilos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TecnicasComponent } from './components/tecnicas/tecnicas.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { PuntosComponent } from './components/puntos/puntos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    HistoriaComponent,
    HilosComponent,
    NavbarComponent,
    TecnicasComponent,
    AccesoriosComponent,
    PuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
