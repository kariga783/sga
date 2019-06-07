import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-files-alumnos',
  templateUrl: './files-alumnos.component.html',
  styleUrls: ['./files-alumnos.component.css']
})
export class FilesAlumnosComponent implements OnInit {

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

  mostrarVisual(){
    var visualCode = $('#visualCode'),
        visualCodeImg = $('#visualCodeImg'),
        visualWindows = $('#visualWindows'), 
        visualMAC = $('#visualMAC'),
        visualDebUb = $('#visualDebUb'),
        visualRhFeSu = $('#visualRhFeSu'),
        labelVisual = $('#labelVisual');
    visualCode.css("height","215px");
    visualCodeImg.css("height","70px");
    visualWindows.css("visibility","visible");
    visualMAC.css("visibility","visible");
    visualDebUb.css("visibility","visible");
    visualRhFeSu.css("visibility","visible");
    labelVisual.css("visibility","visible");
  };
  ocultarVisual(){
    var visualCode = $('#visualCode'),
        visualCodeImg = $('#visualCodeImg'),
        visualWindows = $('#visualWindows'), 
        visualMAC = $('#visualMAC'),
        visualDebUb = $('#visualDebUb'),
        visualRhFeSu = $('#visualRhFeSu'), 
        labelVisual = $('#labelVisual');  
    visualCode.css("height","0px");
    visualCodeImg.css("height","0px");
    visualWindows.css("visibility","hidden");
    visualMAC.css("visibility","hidden");
    visualDebUb.css("visibility","hidden");
    visualRhFeSu.css("visibility","hidden");
    labelVisual.css("visibility","hidden");
  };
  mostrarVB(){
    var virtualBox = $('#virtualBox'),
        virtualBoxImg = $('#virtualBoxImg'),
        vbWindows = $('#vbWindows'), 
        vbMAC = $('#vbMAC'),
        vbDeb = $('#vbDeb'),
        labelVB = $('#labelVB');
    virtualBox.css("height","215px");
    virtualBoxImg.css("height","70px");
    vbWindows.css("visibility","visible");
    vbMAC.css("visibility","visible");
    vbDeb.css("visibility","visible");
    labelVB.css("visibility","visible");
  };
  ocultarVB(){
    var virtualBox = $('#virtualBox'),
        virtualBoxImg = $('#virtualBoxImg'),
        vbWindows = $('#vbWindows'), 
        vbMAC = $('#vbMAC'),
        vbDeb = $('#vbDeb'),
        labelVB = $('#labelVB');
    virtualBox.css("height","0px");
    virtualBoxImg.css("height","0px");
    vbWindows.css("visibility","hidden");
    vbMAC.css("visibility","hidden");
    vbDeb.css("visibility","hidden");
    labelVB.css("visibility","visible");
  };
}
