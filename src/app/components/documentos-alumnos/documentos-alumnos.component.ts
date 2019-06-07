import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';



@Component({
  selector: 'app-documentos-alumnos',
  templateUrl: './documentos-alumnos.component.html',
  styleUrls: ['./documentos-alumnos.component.css']
})


export class DocumentosAlumnosComponent implements OnInit {

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

  insertProlog(){
    var usuario
    this.http.post(`http://localhost:3001/routes/postInsertarDescargaPrologPdf`,usuario).subscribe(info => {
      console.log("Prolog insert");
    });
  }
  insertProxi(){
    var usuario
    this.http.post(`http://localhost:3001/routes/postInsertarDescargaProxiDoc`,usuario).subscribe(info => {
      console.log("Prolog insert");
    });
  }
  insertMario(){
    var usuario
    this.http.post(`http://localhost:3001/routes/postInsertarDescargaMarioHtml`,usuario).subscribe(info => {
      console.log("Prolog insert");
    });
  }
}
