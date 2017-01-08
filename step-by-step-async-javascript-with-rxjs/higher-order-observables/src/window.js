/*

	window => splits a observable sequence into another branching observables sequence

	Observable<number> => Observable<Observable<number>>


*/

import {Observable,Subject} from 'rxjs/Rx';

let emitter = new Subject();

Observable.interval(200)
	.take(20)
	.window(emitter)
	.map( createdObserable => createdObserable.count() )
	.switch()
	.subscribe( r => console.log(r) );



setTimeout(() => emitter.next(1),2000)
setTimeout(() => emitter.next(1),4000)
setTimeout(() => emitter.next(1),3000)