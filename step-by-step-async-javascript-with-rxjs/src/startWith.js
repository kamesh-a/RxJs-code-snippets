 import {Observable} from 'rxjs/Rx';

 let initial = 1;
 Observable.from([2,3,5,5,6])
 	.startWith(initial)
 	.subscribe(r => console.log(r))

