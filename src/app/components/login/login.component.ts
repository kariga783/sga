import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

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
    debugger
    correoInstitucional = $('#numeroControl').val();
    password = $('#password').val();
    var usuario = { correoInstitucional, password }
    this.http.post<Respuesta>(`http://localhost:3001/routes/postLogin`, usuario).subscribe(info => {
      if(info == undefined || info == null) {
        debugger
        console.log("error");
      } else {
        console.log("login correcto");
        this.router.navigate(['/inicioAlumnos']);
      }
    });
  }

}