import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HilosComponent } from './components/hilos/hilos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TecnicasComponent } from './components/tecnicas/tecnicas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { EnviosComponent } from './components/envios/envios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { RegistroComponent } from './components/registro/registro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaCarritoComponent } from './components/lista-carrito/lista-carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    HilosComponent,
    NavbarComponent,
    TecnicasComponent,
    HomeComponent,
    LoginComponent,
    PoliticasComponent,
    EnviosComponent,
    ContactoComponent,
    RegistroComponent,
    PageNotFoundComponent,
    ReactiveFormsComponent,
    ListaProductosComponent,
    ListaCarritoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('Facebook-App-ID-Goes-Here'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
