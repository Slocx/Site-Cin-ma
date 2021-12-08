import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  deleteSalleById(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

    /**
   * Récupérer les articles depuis l'API
   * @returns Observable contenant la reponse avec les films ou l'erreur Http
   */
  getSalles(): Observable<Salle[]> {
    // récupération via client Http Angular
    return this.http.get<Salle[]>(`${environment.apiUrl}/salles`);
  }

  getSalle(id: number): Observable<Salle> {
    return this.http.get<Salle>(`${environment.apiUrl}/salles/${id}`);
  }

}
