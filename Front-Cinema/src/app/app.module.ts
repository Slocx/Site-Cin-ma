import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FilmsPageComponent } from './film/films-page/films-page.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmComponent } from './film/films-page/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { ClientCardComponent } from './clients/client-page/client-card/client-card.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SallePageComponent } from './salles/salle-page/salle-page.component';
import { SalleComponent } from './salles/salle-page/salle/salle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FilmsPageComponent,
    FilmDetailComponent,
    FilmComponent,
    ClientPageComponent,
    ClientCardComponent,
    ClientCreateComponent,
    SallePageComponent,
    SalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
