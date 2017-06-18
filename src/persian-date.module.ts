import { NgModule } from '@angular/core';

import { PersianCalendarService } from './persian-calendar-service';
import { PersianDate } from './persian-date.pipe';

const ANGULAR_PERSIAN_DATE_PIPES = [
    PersianCalendarService,
    PersianDate,
]


@NgModule({
    declarations: ANGULAR_PERSIAN_DATE_PIPES,
    exports: ANGULAR_PERSIAN_DATE_PIPES,
})

export class PersianDateModule { }