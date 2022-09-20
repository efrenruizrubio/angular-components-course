import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private finishDiscount: Date = new Date(0, 0);
  today: Date = new Date();
  hours: number = 0;

  getFinishDiscount() {
    return this.finishDiscount;
  }

  setFinishDiscount(date: Date) {
    this.finishDiscount = date;
  }

  getToday() {
    return this.today;
  }

  setHours(hours: number) {
    this.hours = hours;
  }

  getHours() {
    return this.hours;
  }

  timeLeftForDiscount() {
    return (this.finishDiscount.getTime() - this.today.getTime()) / 3600000;
  }

  constructor() {}
}
