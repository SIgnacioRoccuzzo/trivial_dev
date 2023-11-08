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
      this.puntuacion += this.preguntaActual.puntuacion;
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
    }
    this.mostrarAlerta(this.respuestaCorrecta ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta');
    setTimeout(() => {
      this.siguientePregunta(); // Avanza a la siguiente pregunta después de mostrar la respuesta
    }, 2000); // Espera 2 segundos (ajusta esto según tus preferencias)
  }

  private cargarPregunta() {
    this.preguntaActual = this.preguntasService.getOnePregunta(this.numPreguntaActual);
  }

  private mostrarAlerta(message: string) {
    alert(message);
  }

  private siguientePregunta() {
    this.numPreguntaActual++;
    this.cargarPregunta();
    this.respuestaCorrecta = false;
    this.respuestaIncorrecta = false;
  }
}


