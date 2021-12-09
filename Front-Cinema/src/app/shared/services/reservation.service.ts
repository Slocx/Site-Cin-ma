import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  deleteReservationById(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

    /**
   * Récupérer les articles depuis l'API
   * @returns Observable contenant la reponse avec les reservations ou l'erreur Http
   */
  getReservations(): Observable<Reservation[]> {
    // récupération via client Http Angular
    return this.http.get<Reservation[]>(`${environment.apiUrl}/reservations`);
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${environment.apiUrl}/reservations/${id}`);
  }

}
