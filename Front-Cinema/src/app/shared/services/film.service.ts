import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

    /**
   * Récupérer les articles depuis l'API
   * @returns Observable contenant la reponse avec les films ou l'erreur Http
   */
  getFilms(): Observable<Film[]> {
    // récupération via client Http Angular
    return this.http.get<Film[]>(`${environment.apiUrl}/films`);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.apiUrl}/films/${id}`);
  }


}
