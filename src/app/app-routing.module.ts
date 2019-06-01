import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicioAlumnos', component:  InicioAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
