import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lista-respuestas',
  templateUrl: './lista-respuestas.component.html',
  styleUrls: ['./lista-respuestas.component.css']
})
export class ListaRespuestasComponent {
  @Output() respuestaok: EventEmitter<string> = new EventEmitter<string>();
  @Input() respuestas: string[] = [];

  respuestaSelect(respuesta: string) {
    this.respuestaok.emit(respuesta);
    console.log(respuesta);
  }
}
