/* 

	mergeMap | flatMap = map + mergeAll

*/

import {Observable,Subject}  from 'rxjs/Rx';

let source = new Subject(); // Instead of fromEvent of user click we are using subject just to start and event bus

setTimeout(() => source.next(1) , 200);

Observable.from(source)
	.mergeMap( () => Observable.interval(1000).take(10)) // Observable<Observable(number)> => Observale<number>
	.subscribe( r => console.log(r) );

setTimeout(() => source.next(2) , 5000);