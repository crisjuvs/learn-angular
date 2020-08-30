import { Component, Input } from '@angular/core';
import {Person} from '../plantilla';

@Component({
  selector: 'app-main-component',
  templateUrl: './app.main.component.html'
})
export class MainComponent {

    @Input() empleado: Person;
}
