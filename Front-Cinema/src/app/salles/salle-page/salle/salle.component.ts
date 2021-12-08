import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/shared/models/salle';
import { SalleService } from 'src/app/shared/services/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  @Input() salle!: Salle;

  constructor(private router: Router, private salleService: SalleService) { }

  ngOnInit(): void {
  }

  viewSalle(): void {
    this.router.navigate(['../salles', this.salle.id]);
  }

  // deleteSalle(): void {
  //   if (this.salle.id) {
  //     this.salleService.deleteClientById(this.salle.id)
  //       .subscribe((_) => {
  //         this.deleteEmitter.emit();
  //       })
  //   }
  // }

}
