import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-perfil-alumnos',
  templateUrl: './perfil-alumnos.component.html',
  styleUrls: ['./perfil-alumnos.component.css']
})
export class PerfilAlumnosComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }
  inicioAlumnos(){
    this.router.navigate(['/inicioAlumnos']);
  };
  perfilAlumnos(){
    this.router.navigate(['/perfilAlumnos']);
  };
  documentosAlumnos(){
    this.router.navigate(['/documentosAlumnos']);
  };
  filesAlumnos(){
    this.router.navigate(['/filesAlumnos']);
  };
  tutorialesAlumnos(){
    this.router.navigate(['/tutorialesAlumnos']);
  };
  salonesAlumnos(){
    this.router.navigate(['/salonesAlumnos']);
  };
  logout(){
    this.router.navigate(['/']);
  };


}
