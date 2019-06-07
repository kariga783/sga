import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-salones-alumnos',
  templateUrl: './salones-alumnos.component.html',
  styleUrls: ['./salones-alumnos.component.css']
})
export class SalonesAlumnosComponent implements OnInit {
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
  ocultarBaja(){
    var pB = $("#pB"),
        pA = $("#pA"),
        detalles1 = $("#detalles1"),
        detalles2 = $("#detalles2"),
        detalles3 = $("#detalles3"),
        detalles4 = $("#detalles4"),
        detalles5 = $("#detalles5"),
        detalles6 = $("#detalles6"),
        detalles7 = $("#detalles7"),
        downstairs = $("#downstairs"),
        lc25 = $("#lc25"),
        lc24 = $("#lc24"),
        lc22 = $("#lc22"),
        redes = $("#redes");
    pB.css("display","none");
    pA.css("display","block");
    detalles1.css("display","none");
    detalles2.css("display","none");
    detalles3.css("display","none");
    detalles4.css("display","none");
    detalles5.css("display","none");
    detalles6.css("display","none");
    detalles7.css("display","none");
    downstairs.css("display","block");
    lc25.css("display","block");
    lc24.css("display","block");
    lc22.css("display","block");
    redes.css("display","block");
  };
  ocultarAlta(){
    var pB = $("#pB"),
        pA = $("#pA"),
        detalles1 = $("#detalles1"),
        detalles2 = $("#detalles2"),
        detalles3 = $("#detalles3"),
        detalles4 = $("#detalles4"),
        detalles5 = $("#detalles5"),
        detalles6 = $("#detalles6"),
        detalles7 = $("#detalles7"),
        downstairs = $("#downstairs"),
        lc25 = $("#lc25"),
        lc24 = $("#lc24"),
        lc22 = $("#lc22"),
        redes = $("#redes");
    pB.css("display","block");
    pA.css("display","none");
    detalles1.css("display","block");
    detalles2.css("display","block");
    detalles3.css("display","block");
    detalles4.css("display","block");
    detalles5.css("display","block");
    detalles6.css("display","block");
    detalles7.css("display","block");
    downstairs.css("display","none");
    lc25.css("display","none");
    lc24.css("display","none");
    lc22.css("display","none");
    redes.css("display","none");
  };
}

