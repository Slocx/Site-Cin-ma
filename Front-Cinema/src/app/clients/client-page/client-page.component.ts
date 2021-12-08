import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  id?: number = undefined;

  clients: Client[] = []

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    // récupérer l'id depuis l'url
    this.id = this.route.snapshot.params['id'];

    // récupération en asynchrone des params de l'url
    this.route.params.subscribe((params) => {
      console.log(params);
    })
    // appel du service
    this.refreshClients();
  }

  /**
   * Appelle le service pour afficher la liste des utilisateurs
   * @returns Subscription
   */
  refreshClients(): Subscription {
    return this.clientService.getClients()
      // souscription aux changements de l'observable
      .subscribe(
        // dés qu'il y a une reponse
        (clients: Client[]) => {
          // j'assigne les utilisateurs récupére au tableau du composant
          this.clients = clients;
        }
      );
  }
}
