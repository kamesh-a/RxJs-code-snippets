/*

	We are going to see about higher-order-observables in rxjs

	Highorder functions are
		a functions which takes functions as arguments and return functions.


	Flattening of data.

	Switch acutally switches from observables in to another inner observable
*/

import {Observable,Subject}  from 'rxjs/Rx';

let source = new Subject(); // Instead of fromEvent of user click we are using subject just to start and event bus

setTimeout(() => source.next(1) , 200);

Observable.from(source)
	.map( () => Observable.interval(1000).take(5))		
	.switch() // Observable<Observable(number)> => Observale<number>
	.subscribe( r => console.log(r) );


setTimeout(() => source.next(2) , 5000);

/*

Marble diagram

-1-----------------------5----
	map()
-+-----------------------+
 \		switch		      \
  ----0----1----2----3---  ----0----1----2...

------0----1----2----3--------0----1----2...


*/