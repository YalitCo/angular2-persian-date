﻿import {Injectable} from '@angular/core';
@Injectable()
export class PersianCalendarService {
  weekDayNames: string[] = ["شنبه", "یکشنبه", "دوشنبه",
    "سه شنبه", "چهارشنبه",
    "پنج شنبه", "جمعه"];
  monthNames: string[] = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"];
  strWeekDay: string = null;
  strMonth: string = null;
  day: number = null;
  month: number = null;
  year: number = null;
  ld: number = null;
  farsiDate: string = null;

  today: Date = new Date();

  gregorianYear = null;
  gregorianMonth = null;
  gregorianDate = null;
  WeekDay = null;
  buf1: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  buf2: number[] = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

  constructor() {
  }
  PersianCalendar(gregorianDate): string {
    this.today = gregorianDate;
    this.gregorianYear = this.today.getFullYear();
    this.gregorianMonth = this.today.getMonth() + 1;
    this.gregorianDate = this.today.getDate();
    this.WeekDay = this.today.getDay();
    this.toPersian(gregorianDate);
    return this.strWeekDay + " " + this.day + " " + this.strMonth + " " + this.year;


  }
  toPersian(gregorianDate) {
    if ((this.gregorianYear % 4) != 0)
      this.farsiDate = this.func1();
    else
      this.farsiDate = this.func2();
    this.strMonth = this.monthNames[Math.floor(this.month - 1)];
    this.strWeekDay = this.weekDayNames[this.WeekDay + 1];

  }


  func1(): string {
    this.day = this.buf1[this.gregorianMonth - 1] + this.gregorianDate;
    if (this.day > 79) {
      this.day = this.day - 79;
      if (this.day <= 186) {
        var day2 = this.day;
        this.month = (day2 / 31) + 1;
        this.day = (day2 % 31);
        if (day2 % 31 == 0) {
          this.month--;
          this.day = 31;
        }
        this.year = this.gregorianYear - 621;
      }
      else {
        var day2 = this.day - 186;
        this.month = (day2 / 30) + 7;
        this.day = (day2 % 30);
        if (day2 % 30 == 0) {
          this.month = (day2 / 30) + 6;
          this.day = 30;
        }
        this.year = this.gregorianYear - 621;
      }
    }
    else {
      this.ld = this.gregorianYear > 1996 && this.gregorianYear % 4 == 1 ? 11 : 10;
      var day2 = this.day + this.ld;
      this.month = (day2 / 30) + 10;
      this.day = (day2 % 30);
      if (day2 % 30 == 0) {
        this.month--;
        this.day = 30;
      }
      this.year = this.gregorianYear - 622;
    }
    var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
    return fullDate
  }



  func2(): string {
    this.day = this.buf2[this.gregorianMonth - 1] + this.gregorianDate;
    this.ld = this.gregorianYear >= 1996 ? 79 : 80;
    if (this.day > this.ld) {
      this.day = this.day - this.ld;
      if (this.day <= 186) {
        var day2 = this.day;
        this.month = (day2 / 31) + 1;
        this.day = (day2 % 31);
        if (day2 % 31 == 0) {
          this.month--;
          this.day = 31;
        }
        this.year = this.gregorianYear - 621;
      } else {
        var day2 = this.day - 186;
        this.month = (day2 / 30) + 7;
        this.day = (day2 % 30);
        if (day2 % 30 == 0) {
          this.month--;
          this.day = 30;
        }
        this.year = this.gregorianYear - 621;
      }
      var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
      return fullDate
    }
    else {
      var day2 = this.day + 10;
      this.month = (day2 / 30) + 10;
      this.day = (day2 % 30);
      if (day2 % 30 == 0) {
        this.month--;
        this.day = 30;
      }
      this.year = this.gregorianYear - 622;
    }
  }
}