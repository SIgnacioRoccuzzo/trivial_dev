import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta } from '../interface/pregunta.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private preguntasUrl = 'assets/preguntas.json'; // Ruta del archivo JSON

  constructor(private http: HttpClient) { }

  getPreguntasPorCategoria(categoria: string): Observable<Pregunta[]> {
    return this.http.get<{ [categoria: string]: Pregunta[] }>(this.preguntasUrl).pipe(
      map(data => data[categoria] || [])
    );
  }
}
