import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Injection du client Http pour lancer les requêttes
  constructor(private http: HttpClient) { }

  // Créer un observable qui va (peut être) retourner un tableau d'utilisateur
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/Clients`);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${environment.apiUrl}/Clients/${id}`);
  }

  updateClient(id: number, Client: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.apiUrl}/Clients/${id}`, Client);
  }

  createClient(Client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/Clients`, Client);
  }

  deleteClient(Client: Client): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/Clients/${Client.id}`)
  }

  deleteClientById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/Clients/${id}`)
  }
}
