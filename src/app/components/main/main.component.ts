import { Component, inject } from '@angular/core';
import { Pregunta } from 'src/app/interface/pregunta.interface';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  numPreguntaActual: number;
  preguntaActual: Pregunta | undefined;
  puntuacion: number;
  respuestaCorrecta: boolean = false;
  respuestaIncorrecta: boolean = false;
  preguntasService = inject(PreguntasService)
  puntosTotales: number = 0;
  finDelTrivial: boolean = false;
  totalPreguntas: number = 30;
  puntos: number = 0
  respuestasCorrectas: number = 0;
  respuestasIncorrectas: number = 0;


  constructor() {
    this.puntuacion = 0;
    this.numPreguntaActual = 0;
  }

  ngOnInit() {
    this.cargarPregunta();
  }

  onRespuestaSelect(respuesta: string) {
    if (this.preguntaActual?.correcta === respuesta) {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.puntos += this.preguntaActual.puntuacion;
      this.respuestasCorrectas++; // Incrementa el contador de respuestas correctas
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasIncorrectas++; // Incrementa el contador de respuestas fallidas
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

  cargarPregunta() {
    this.preguntaActual = this.preguntasService.getOnePregunta(this.numPreguntaActual);
  }

  mostrarAlerta(message: string) {
    alert(message);
  }

  siguientePregunta() {
    this.numPreguntaActual++;
    this.cargarPregunta();
    this.respuestaCorrecta = false;
    this.respuestaIncorrecta = false;
  }
}
