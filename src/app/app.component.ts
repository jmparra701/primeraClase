import { LocationStrategy } from '@angular/common';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClaseVisualEstudioCore';
}

console.log('hola Mundo Sniper');

//ENTIDADES DE PRODUCTO

let Codigo          :number=0;
let NOMBRE          :string='';
let PESO            :string ='';
let FAMILIA         :string ='';
let FECHA_CADUCIDAD :string ='';
let UNIDAD          :string ='';
let LOTE            :string ='';
let PVP             :string ='';
let COSTO           :string ='';


console.log('hola');

console.log(this.codigo);
