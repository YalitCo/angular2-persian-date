import {PersianCalendarService} from './services/persian-calendar-service';
import { NgModule } from '@angular/core';
import { PersianDate } from './pipes/persian-date.pipe';


@NgModule({
    declarations: [PersianDate],
    exports: [PersianDate],
    providers:[PersianCalendarService]
})

export class PersianDateModule { }