import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documentos-maestros',
  templateUrl: './documentos-maestros.component.html',
  styleUrls: ['./documentos-maestros.component.css']
})
export class DocumentosMaestrosComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  };
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