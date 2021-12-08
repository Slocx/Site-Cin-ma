import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {
 
  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms()
      .subscribe((films:Film[])=> this.films = films);
  }

}
