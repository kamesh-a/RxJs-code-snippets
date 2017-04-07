/*
	
	Horizontal combination operator
	Buffer,scan,reduce
	scan - each item without compelete event
	reduce - each item AFTER compelete event

	Vertical Combination operators.
	[AND-Type] = zip,combineLatest,withLatestFrom.
	[OR-Type] = merge.


	Buffer < closing(observer,subscriber,promise)>
	BufferCount <number>
	BufferTime <timeInMilliseconds>
	BufferWhen< close(function:observable/subscriber/promise) > function you have give collects -> close -> repeat
	BufferToggle< start(observer,subscriber,promise) , close(function:observable/subscriber/promise) >

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

