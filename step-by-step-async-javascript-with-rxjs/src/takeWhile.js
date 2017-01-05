// similar to filter but stops after predicate or condition fails.


import {Observable} from 'rxjs/Rx';


Observable.interval(1000)
	.map( i => i+1 )
	.takeWhile( tk => tk < 10 )
	.subscribe( x => console.log(x));