import {Observable,Subject} from 'rxjs/Rx';

let source = new Subject(); // Instead of fromEvent of user click we are using subject just to start and event bus

setTimeout(() => source.next(1) , 200);
setTimeout(() => source.next(2) , 5000);


source.
	map(() => Observable.interval(1000).take(6))
	.mergeAll(1)
	.subscribe( r => console.log(r) );


// NB : Arguments : Define how much concurrent streams can be merged together
// If there two streams, limit = 1, until 1st streams ends. next steam will not begin.