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


let interval = Observable.interval(1000)


interval
	.bufferCount(4)
	.take(3)
	.subscribe( 
			r => console.log('bufferCount ',r),
			e => console.error(e),
			() => console.log('done')
		)