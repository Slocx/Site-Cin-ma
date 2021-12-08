import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/shared/models/salle';
import { SalleService } from 'src/app/shared/services/salle.service';

@Component({
  selector: 'app-salle-page',
  templateUrl: './salle-page.component.html',
  styleUrls: ['./salle-page.component.scss']
})
export class SallePageComponent implements OnInit {

  salles: Salle[] = [];

  constructor(private salleService: SalleService) { }

  ngOnInit(): void {
    this.salleService.getSalles()
      .subscribe((salles:Salle[])=> this.salles = salles);
  }
}
