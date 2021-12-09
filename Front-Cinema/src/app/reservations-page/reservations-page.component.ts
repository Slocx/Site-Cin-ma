import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations()
      .subscribe((reservations:Reservation[])=> this.reservations = reservations);
  }
}
