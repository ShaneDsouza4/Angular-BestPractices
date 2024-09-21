import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({})

  constructor(
    private formBuilder: FormBuilder,
    private _reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      let reservation = this._reservationService.getReservation(id);
      if (reservation) {
        this.reservationForm.patchValue(reservation)
      }
    }
  }



  onSubmit() {
    if (this.reservationForm.valid) {
      //console.log("Valid")

      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if (id) {
        //Update
        console.log("Updating...")
        this._reservationService.updateReservation(id, reservation);
      } else {
        //Add
        console.log("Adding new...")
        this._reservationService.addReservation(reservation)
      }

      this.router.navigate(['/list'])
    }
  }
}
