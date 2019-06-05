import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { InicioMaestrosComponent } from './components/inicio-maestros/inicio-maestros.component';
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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicioAlumnos', component:  InicioAlumnosComponent },
  { path: 'inicioMaestros', component: InicioMaestrosComponent },
  { path: 'documentosAlumnos', component: DocumentosAlumnosComponent },
  { path: 'documentosMaestros', component: DocumentosMaestrosComponent },
  { path: 'filesAlumnos', component: FilesAlumnosComponent },
  { path: 'filesMaestros', component: FilesMaestrosComponent },
  { path: 'perfilAlumnos', component: PerfilAlumnosComponent },
  { path: 'perfilMaestros', component: PerfilMaestrosComponent },
  { path: 'salonesAlumnos', component: SalonesAlumnosComponent },
  { path: 'salonesMaestros', component: SalonesMaestrosComponent },
  { path: 'tutorialesAlumnos', component: TutorialesAlumnosComponent },
  { path: 'tutorialesMaestros', component: TutorialesMaestrosComponent },
  { path: 'peticionesMaestros', component: PeticionesMaestrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
