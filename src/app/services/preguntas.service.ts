import { Injectable } from '@angular/core';
import { Pregunta } from '../interface/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private arrPreguntas: Pregunta[];


  constructor() {
    this.arrPreguntas = [
      {
        texto: "¿Cuál es la capital de Francia?",
        respuestas: ["París", "Madrid", "Berlín", "Roma"],
        correcta: "París",
        puntuacion: 3
      },
      {
        texto: "¿Cuál es el resultado de 3 + 2?",
        respuestas: ["4", "5", "6", "7"],
        correcta: "5",
        puntuacion: 2
      },
      {
        texto: "¿Cuál es el elemento químico con símbolo O?",
        respuestas: ["Oro", "Oxígeno", "Osmio", "Olitio"],
        correcta: "Oxígeno",
        puntuacion: 3
      },
      {
        texto: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Tierra", "Júpiter", "Marte", "Saturno"],
        correcta: "Júpiter",
        puntuacion: 4
      },
      {
        texto: "¿En qué año terminó la Segunda Guerra Mundial?",
        respuestas: ["1940", "1944", "1945", "1950"],
        correcta: "1945",
        puntuacion: 5
      },
      {
        texto: "¿Cuál es el idioma oficial de Brasil?",
        respuestas: ["Español", "Inglés", "Portugués", "Francés"],
        correcta: "Portugués",
        puntuacion: 3
      },
      {
        texto: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correcta: "Amazonas",
        puntuacion: 4
      },
      {
        texto: "¿Quién escribió 'Cien años de soledad'?",
        respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Jorge Luis Borges"],
        correcta: "Gabriel García Márquez",
        puntuacion: 5
      },
      {
        texto: "¿Cuál es la fórmula química del agua?",
        respuestas: ["CO2", "H2O", "O2", "NaCl"],
        correcta: "H2O",
        puntuacion: 3
      },
      {
        texto: "¿En qué año se fundó la ONU?",
        respuestas: ["1942", "1945", "1950", "1955"],
        correcta: "1945",
        puntuacion: 5
      },
      {
        texto: "¿Qué animal es conocido por su larga trompa?",
        respuestas: ["Elefante", "Jirafa", "León", "Cebra"],
        correcta: "Elefante",
        puntuacion: 7
      },
      {
        texto: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        respuestas: ["1776", "1789", "1801", "1824"],
        correcta: "1776",
        puntuacion: 10
      },
      {
        texto: "¿Cuál es el planeta más cercano al Sol en nuestro sistema solar?",
        respuestas: ["Venus", "Marte", "Júpiter", "Mercurio"],
        correcta: "Mercurio",
        puntuacion: 8
      },
      {
        texto: "¿Quién escribió la obra de teatro 'Romeo y Julieta'?",
        respuestas: ["William Shakespeare", "Charles Dickens", "Jane Austen", "F. Scott Fitzgerald"],
        correcta: "William Shakespeare",
        puntuacion: 7
      },
      {
        texto: "¿Cuál es el quinto número primo?",
        respuestas: ["2", "5", "9", "11"],
        correcta: "11",
        puntuacion: 6
      },
      {
        texto: "¿Qué famosa pintura fue creada por Leonardo da Vinci?",
        respuestas: ["La Última Cena", "La Noche Estrellada", "La Mona Lisa", "Los Girasoles"],
        correcta: "La Mona Lisa",
        puntuacion: 7
      },
      {
        texto: "¿Cuál es la capital de Italia?",
        respuestas: ["Berlín", "Madrid", "Roma", "París"],
        correcta: "Roma",
        puntuacion: 5
      },
      {
        texto: "¿Qué elemento químico tiene el símbolo 'H'?",
        respuestas: ["Helio", "Hidrógeno", "Hierro", "Hidrólisis"],
        correcta: "Hidrógeno",
        puntuacion: 6
      },
      {
        texto: "¿Cuál es el océano más grande del mundo?",
        respuestas: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        correcta: "Océano Pacífico",
        puntuacion: 8
      },
      {
        texto: "¿Quién escribió 'Don Quijote de la Mancha'?",
        respuestas: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda", "Jorge Luis Borges"],
        correcta: "Miguel de Cervantes",
        puntuacion: 7
      },
      {
        texto: "¿Cuál es el río más ancho del mundo?",
        respuestas: ["Nilo", "Amazonas", "Río de la Plata", "Danubio"],
        correcta: "Río de la Plata",
        puntuacion: 8
      },
      {
        texto: "¿Cuál es el símbolo químico del oro?",
        respuestas: ["Ag", "Fe", "Au", "Cu"],
        correcta: "Au",
        puntuacion: 6
      },
      {
        texto: "¿Cuál es el planeta conocido como 'el planeta rojo'?",
        respuestas: ["Marte", "Júpiter", "Saturno", "Neptuno"],
        correcta: "Marte",
        puntuacion: 7
      },
      {
        texto: "¿Cuál es la capital de Japón?",
        respuestas: ["Seúl", "Pekín", "Tokio", "Bangkok"],
        correcta: "Tokio",
        puntuacion: 5
      },
      {
        texto: "¿Cuál es el símbolo químico del hidróxido de sodio?",
        respuestas: ["NaOH", "H2SO4", "CO2", "HCl"],
        correcta: "NaOH",
        puntuacion: 6
      },
      {
        texto: "¿Quién fue el primer presidente de los Estados Unidos?",
        respuestas: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        correcta: "George Washington",
        puntuacion: 7
      },
      {
        texto: "¿Cuál es el nombre del océano que se encuentra al este de África?",
        respuestas: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Mar Mediterráneo"],
        correcta: "Océano Índico",
        puntuacion: 6
      },
      {
        texto: "¿Cuál es el animal terrestre más grande del mundo?",
        respuestas: ["Elefante", "Rinoceronte", "Jirafa", "Hipopótamo"],
        correcta: "Elefante",
        puntuacion: 7
      },
      {
        texto: "¿Quién formuló la teoría de la relatividad?",
        respuestas: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correcta: "Albert Einstein",
        puntuacion: 8
      },
      {
        texto: "¿Cuál es el proceso de conversión de glucosa en energía en las células?",
        respuestas: ["Fotosíntesis", "Respiración celular", "Fermentación", "Osmosis"],
        correcta: "Respiración celular",
        puntuacion: 6
      }

    ];
  }
  getPregunta(pos: number): Pregunta {
    return this.arrPreguntas[pos];
  }


}

