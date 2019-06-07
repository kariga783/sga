import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio-maestros',
  templateUrl: './inicio-maestros.component.html',
  styleUrls: ['./inicio-maestros.component.css']
})
export class InicioMaestrosComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }

  inicioMaestros(){
    this.router.navigate(['/inicioMaestros']);
  };
  perfilMaestros(){
    this.router.navigate(['/perfilMaestros']);
  };
  documentosMaestros(){
    this.router.navigate(['/documentosMaestros']);
  };
  filesMaestros(){
    this.router.navigate(['/filesMaestros']);
  };
  tutorialesMaestros(){
    this.router.navigate(['/tutorialesMaestros']);
  };
  salonesMaestros(){
    this.router.navigate(['/salonesMaestros']);
  };
  peticionesMaestros(){
    this.router.navigate(['/peticionesMaestros']);
  };
  logout(){
    this.router.navigate(['/']);
  };

}
