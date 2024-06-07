import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pregunta } from 'src/app/interface/pregunta.interface';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  puntosTotales: number = 0;
  finDelTrivial: boolean = false;
  totalPreguntas: number = 10;
  puntos: number = 0;
  respuestasCorrectas: number = 0;
  respuestasIncorrectas: number = 0;
  numPreguntaActual: number = 0;
  preguntaActual!: Pregunta;
  puntuacion: number = 0;
  respuestaCorrecta: boolean = false;
  respuestaIncorrecta: boolean = false;
  finalizado: boolean = false;
  respuestaSeleccionada: boolean = false;
  categoria: string = '';
  preguntas: Pregunta[] = [];
  subscription!: Subscription;

  preguntasService = inject(PreguntasService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
      this.cargarPreguntas();
    });
  }

  cargarPreguntas() {
    this.preguntasService.getPreguntasPorCategoria(this.categoria).subscribe(preguntas => {
      this.preguntas = preguntas;
      this.preguntaActual = this.preguntas[this.numPreguntaActual];
    });
  }

  onRespuestaSelect($event: string) {
    if (this.preguntaActual?.correcta === $event) {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.puntos += this.preguntaActual.puntuacion;
      this.respuestasCorrectas++;
      this.setAnimationClass('respuesta-correcta');
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasIncorrectas++;
      this.setAnimationClass('respuesta-incorrecta');
    }

    if (this.numPreguntaActual === this.totalPreguntas - 1) {
      this.finalizarTrivial();
    } else {
      setTimeout(() => {
        this.siguientePregunta();
      }, 1000);
    }
  }

  finalizarTrivial() {
    this.finDelTrivial = true;
    this.puntosTotales = this.puntos;
  }

  setAnimationClass(className: string) {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.classList.add('animated');
      setTimeout(() => {
        element.classList.remove('animated');
      }, 1000);
    }
  }

  siguientePregunta() {
    if (!this.finDelTrivial) {
      this.numPreguntaActual++;
      this.preguntaActual = this.preguntas[this.numPreguntaActual];
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = false;
    }
  }

  reiniciarTrivia() {
    this.finDelTrivial = false;
    this.puntosTotales = 0;
    this.respuestasCorrectas = 0;
    this.respuestasIncorrectas = 0;
    this.numPreguntaActual = 0;
    this.puntuacion = 0;
    this.respuestaCorrecta = false;
    this.respuestaIncorrecta = false;
    this.cargarPreguntas();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
