import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioMaestrosComponent } from './components/inicio-maestros/inicio-maestros.component';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioMaestrosComponent,
    InicioAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
