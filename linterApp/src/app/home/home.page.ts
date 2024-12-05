import { Component } from '@angular/core';
import { CapacitorFlash } from '@capgo/capacitor-flash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public estado: boolean = false;

  constructor() {}

  estadoFlash() {
    this.estado = !this.estado;

    if(this.estado) {
      CapacitorFlash.switchOn({intensity: 100});
      console.log('Linterna encendida');
    } else {
      CapacitorFlash.switchOff();
      console.log('Linterna apagada');
    }
  }

}
