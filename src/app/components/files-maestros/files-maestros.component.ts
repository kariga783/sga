import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-files-maestros',
  templateUrl: './files-maestros.component.html',
  styleUrls: ['./files-maestros.component.css']
})
export class FilesMaestrosComponent implements OnInit {

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
  insertVisualStudio(){
    var usuario
    this.http.post(`http://localhost:3001/routes/postInsertarDescargaVisual`,usuario).subscribe(info => {
      console.log("visual insert");
    });
  };
  insertVB(){
    var usuario
    this.http.post(`http://localhost:3001/routes/postInsertarDescargaVirtualBox`,usuario).subscribe(info => {
      console.log("visual insert");
    });
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
