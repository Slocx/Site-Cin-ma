import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  filmId!: number;

  @Input() film!: Film;
  comments!: Comment[];

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmId = this.route.snapshot.params['id'];

    this.filmService.getFilm(this.filmId)
      .subscribe((film: Film) => {
        this.film = film;
      });
  }

}
