import { Component } from '@angular/core';
import { Persona } from './persona';
import { Person } from './plantilla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent {
  title = 'NuevoProyecto';
  items = [];

  personas: Persona[] = [
    {
      id: 0,
      nombre: 'José',
      apellido: 'Pérez',
      edad: 21,
      img : 'assets/img/laptop_acer.png',
      nombreImg : 'Laptop Acer'
    },
    {
      id: 1,
      nombre: 'Mayllie',
      apellido: 'Huaman',
      edad: 27,
      img : 'assets/img/laptop_huawei.png',
      nombreImg : 'Laptop Huawei'
    }
  ];

  perso: Person[] = [
    {
      id: 5,
      nombre: 'José',
      apellido: 'Pérez',
      edad: 18,
    },
    {
      id: 6,
      nombre: 'Carlos',
      apellido: 'Ramirez',
      edad: 27,
    },
  ];

  // tslint:disable-next-line: typedef
  addOpcion() {
    this.items.push('Opcion');
  }

  // tslint:disable-next-line: typedef
  delete(index: number) {
    this.items.splice(index, 1);
  }

}
