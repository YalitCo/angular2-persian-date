# angular2-persianDate-pipe
A simple Angular 2 pipe that convert Date to Persian date string 


Usage
-----

Import `PersianDateModule` into your app's modules:

``` typescript
import { PersianDateModule } from 'angular2-persian-date';

@NgModule({
  imports: [
    PersianDateModule
  ]
})
```

This makes all the `angular2-persian-date` pipes available for use in your app components.

Available pipes
---------------

## persianDate pipe

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{myDate | persianDate}}
  `
})
```

Prints `چهارشنبه 30 فروردین 1396`