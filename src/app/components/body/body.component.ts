import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent{

  // propiedad mostrar se crea para hacer uso del *ngIf con el boton Mostrar/Ocultar
  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere de una gran responsabilidad',
    autor: 'Ben Parker'
  };
}
