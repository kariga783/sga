import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioMaestrosComponent } from './components/inicio-maestros/inicio-maestros.component';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { DocumentosAlumnosComponent } from './components/documentos-alumnos/documentos-alumnos.component';
import { DocumentosMaestrosComponent } from './components/documentos-maestros/documentos-maestros.component';
import { FilesAlumnosComponent } from './components/files-alumnos/files-alumnos.component';
import { FilesMaestrosComponent } from './components/files-maestros/files-maestros.component';
import { PerfilAlumnosComponent } from './components/perfil-alumnos/perfil-alumnos.component';
import { PerfilMaestrosComponent } from './components/perfil-maestros/perfil-maestros.component';
import { SalonesAlumnosComponent } from './components/salones-alumnos/salones-alumnos.component';
import { SalonesMaestrosComponent } from './components/salones-maestros/salones-maestros.component';
import { TutorialesAlumnosComponent } from './components/tutoriales-alumnos/tutoriales-alumnos.component';
import { TutorialesMaestrosComponent } from './components/tutoriales-maestros/tutoriales-maestros.component';
import { PeticionesMaestrosComponent } from './components/peticiones-maestros/peticiones-maestros.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioMaestrosComponent,
    InicioAlumnosComponent,
    DocumentosAlumnosComponent,
    DocumentosMaestrosComponent,
    FilesAlumnosComponent,
    FilesMaestrosComponent,
    PerfilAlumnosComponent,
    PerfilMaestrosComponent,
    SalonesAlumnosComponent,
    SalonesMaestrosComponent,
    TutorialesAlumnosComponent,
    TutorialesMaestrosComponent,
    PeticionesMaestrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
