import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  categorias: string[] = ['Historia', 'Geografía', 'Ciencia', 'Arte'];

  constructor(private router: Router) { }

  startGame(categoria: string) {
    this.router.navigate(['/trivia', categoria]);
  }
}
