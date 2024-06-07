import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ListaRespuestasComponent } from './components/lista-respuestas/lista-respuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InicioComponent,
    PreguntaComponent,
    ListaRespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
