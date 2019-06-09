import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { routerNgProbeToken } from '@angular/router/src/router_module';

var correoInstitucional;
var password;
var URL = window.location;

interface Respuesta { resultados: string[]; }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }

  login() {
    correoInstitucional = $('#numeroControl').val();
    password = $('#password').val();
    var usuario = { correoInstitucional, password }
    this.http.post<Respuesta>(`http://localhost:3001/routes/postLogin`, usuario).subscribe(info => {
    debugger  
    console.log(info);
    console.log("este es info",info);
      if(info == undefined || info == null) {
        debugger
        console.log("error");
      } else {
          if(info[0].type == 1) {
            this.router.navigate(['/inicioAlumnos']);
          } else {
            this.router.navigate(['/inicioMaestros']);
          }
        console.log("login correcto");
      }
    });
  }

}