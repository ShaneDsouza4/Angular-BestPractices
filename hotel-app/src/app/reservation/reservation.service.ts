import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001"

  private reservations: Reservation[] = [];

  constructor(
    private http: HttpClient
  ) {
    // let savedReservations = localStorage.getItem("reservations")
    // this.reservations = savedReservations ? JSON.parse(savedReservations) : []
  }

  getReservations(): Observable<Reservation[]> {
    //return this.reservations;
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations")
  }

  getReservation(id: string): Observable<Reservation> {
    //return this.reservations.find(x => x.id == id);
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id)
    //return this.http.get<Reservation>(`${this.apiUrl}/reservation/2342982`);
  }

  addReservation(reservation: Reservation): Observable<void> {
    //reservation.id = Date.now().toString();
    //this.reservations.push(reservation);
    //console.log("Added: ", this.reservations)
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.http.post<void>(this.apiUrl + "/reservations", reservation)
  }

  deleteReservation(id: string): Observable<Reservation> {
    //let index = this.reservations.findIndex(x => x.id == id);
    //this.reservations.splice(index, 1);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.http.delete<Reservation>(this.apiUrl + "/reservation/" + id)
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    //let index = this.reservations.findIndex(x => x.id == id)
    //updatedReservation.id = id;
    //this.reservations[index] = updatedReservation
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))

    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation)
  }
}
