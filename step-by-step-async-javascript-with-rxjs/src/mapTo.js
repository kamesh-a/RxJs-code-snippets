import {Observable} from 'rxjs/Rx';


// mapTo will always give the same value out.


Observable.interval(1000)
	.mapTo('Kamesh learning is slow but steady.')
	.subscribe( x => console.log(x) );


/**

O/P : 

Kamesh learning is slow but steady.
Kamesh learning is slow but steady.
Kamesh learning is slow but steady.

*/