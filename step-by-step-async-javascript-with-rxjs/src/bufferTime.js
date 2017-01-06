/*
	
	Buffer is horizontal combination operator
	similar to scan.

	Vertical Combination operators.
	zip,combineLatest,withLatestFrom = AND type
	merge = OR type


	Buffer
	BufferCount
	BufferTime
	BufferWhen
	BufferToggle

*/

import {Observable} from 'rxjs/Rx';

/*

(kamesh|)						(from('kamesh'))
	interval(500)
----0----1----2----3----4----5| (interval)
	zip
----k----a----m----e----s----h| ( zip )
	bufferTime(900)
---------1---------1---------1---------1 (buffer)
	

---------k---------(am)-----(es)-------h| (output)

*/


let bTime = Observable.from('kamesh'.split(''))
	.zip(Observable.interval(500), (x,y)=> x)


bTime.bufferTime(900)
	.subscribe( r => console.log(r))

