import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/shared/models/reservation';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  @Input() reservation!: Reservation;

  constructor(private router: Router, private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  viewReservation(): void {
    this.router.navigate(['../reservations', this.reservation.id]);
  }

}
