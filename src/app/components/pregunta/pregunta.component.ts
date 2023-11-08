import { Component, Input } from '@angular/core';
import { Pregunta } from 'src/app/interface/pregunta.interface';

@Component({
  selector: 'pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent {

  @Input() texto: string;

  constructor() {
    this.texto = '';
  }

}
