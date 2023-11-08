import { Component, inject } from '@angular/core';
import { Pregunta } from 'src/app/interface/pregunta.interface';
import { PreguntasService } from 'src/app/services/preguntas.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  puntosTotales: number = 0;
  finDelTrivial: boolean = false;
  totalPreguntas: number = 30;
  puntos: number = 0
  respuestasCorrectas: number = 0;
  respuestasIncorrectas: number = 0;
  numPreguntaActual: number;
  preguntaActual: Pregunta | undefined;
  puntuacion: number;
  respuestaCorrecta: boolean = false;
  respuestaIncorrecta: boolean = false;

  preguntasService = inject(PreguntasService)



  constructor() {
    this.puntuacion = 0;
    this.numPreguntaActual = 0;
  }

  ngOnInit() {
    this.preguntaActual = this.preguntasService.getPregunta(this.numPreguntaActual);
  }

  onRespuestaSelect($event: string) {
    if (this.preguntaActual?.correcta === $event) {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.puntos += this.preguntaActual.puntuacion;
      this.respuestasCorrectas++;
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasIncorrectas++;
    }

    if (this.numPreguntaActual === this.totalPreguntas - 1) {
      this.finalizarTrivial();
    } else {
      setTimeout(() => {
        this.siguientePregunta();
      }, 500);
    }
  }

  finalizarTrivial() {
    this.finDelTrivial = true;
    this.puntosTotales = this.puntos;

  }

  mostrarAlerta(message: string) {
    alert(message);
  }

  siguientePregunta() {
    this.numPreguntaActual++;
    this.ngOnInit();
    this.respuestaCorrecta = false;
    this.respuestaIncorrecta = false;
  }
}
