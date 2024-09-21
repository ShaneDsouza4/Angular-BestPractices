import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem("reservations")
    this.reservations = savedReservations ? JSON.parse(savedReservations) : []
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(x => x.id == id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    //console.log("Added: ", this.reservations)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(x => x.id == id);
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(x => x.id == id)
    updatedReservation.id = id;
    this.reservations[index] = updatedReservation
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
