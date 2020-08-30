import { Component } from '@angular/core';

import { Person } from '../plantilla';

@Component({
  selector: 'app-second-component',
  templateUrl: './app.second.component.html',
})
// tslint:disable-next-line: component-class-suffix
export class PersonImpl {
  person: Person[] = [
    {
      id: 0,
      nombre: 'José',
      apellido: 'Pérez',
      edad: 18,
    },
    {
      id: 1,
      nombre: 'Carlos',
      apellido: 'Ramirez',
      edad: 27,
    },
  ];
}
