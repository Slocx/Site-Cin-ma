import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmsPageComponent } from './film/films-page/films-page.component';
import { ReservationPageComponent } from './reservations-page/reservations-page.component';
import { SallePageComponent } from './salles/salle-page/salle-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  // redirection quand l'utilisateur arrive sur le chemin /
  { path: "", redirectTo: "films", pathMatch: "full" },
  {
    path: "films", children: [
      { path: "", component: FilmsPageComponent, pathMatch: "full" },
      { path: ":id", component: FilmDetailComponent, pathMatch: "full" },
    ]
  },
  {
    // préfixe de la route
    path: "clients",
    // toutes les routes enfants de la route users
    children: [
      { path: "", component: ClientPageComponent, pathMatch: "full" },
      { path: "new", component: ClientCreateComponent, pathMatch: "full" },
      { path: ":id", component: ClientPageComponent, pathMatch: "prefix" },
      { path: ":id/post", component: ClientPageComponent, pathMatch: "prefix" },
      { path: ":id/profil", component: ClientPageComponent, pathMatch: "prefix" },
    ]
  },
  {
    path: "salles", children: [
      { path: "", component: SallePageComponent, pathMatch: "full" }
    ]
  },
  {
    path: "reservations", children: [
      { path: "", component: ReservationPageComponent, pathMatch: "full" }
    ]
  },
    // Wildcard pour afficher un composant en cas de non existance de la page
    { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
