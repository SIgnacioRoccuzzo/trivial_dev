import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lista-respuestas',
  templateUrl: './lista-respuestas.component.html',
  styleUrls: ['./lista-respuestas.component.css']
})
export class ListaRespuestasComponent {


  @Output() respuestaok: EventEmitter<string>
  @Input() respuestas: string[];

  constructor() {

    this.respuestas = [];
    this.respuestaok = new EventEmitter()
  }
  respuestaSelect(respuesta: string) {
    this.respuestaok.emit(respuesta)
    console.log(respuesta)
  }

}
