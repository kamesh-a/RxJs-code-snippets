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


let interval = Observable.interval(1000)


interval
	.bufferCount(4)
	.take(3)
	.subscribe( 
			r => console.log('bufferCount ',r),
			e => console.error(e),
			() => console.log('done')
		)