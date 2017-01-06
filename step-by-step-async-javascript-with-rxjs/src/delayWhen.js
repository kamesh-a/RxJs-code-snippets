/*
	Delay can give variable delays to input.

	Here apart from `L` character are queued with 200ms 
	in event queue. L comes after all elements bcoz they are queued
	in fron asynously by event loop.
*/

import {Observable} from 'rxjs/Rx';

/*

(LEARNING FOR LIFE|)
	delayWhen( x => {})
--E--A--R--N--I--N--G--<space>--F--O--R--<space>--I--F--E--L--L
							   (200ms)						 (2000s)

*/
Observable.from('LEARNING FOR LIFE'.split(''))
	.delayWhen( x => {
		return x == 'L' ? Observable.interval(2000) : Observable.interval(200)
	})
	.subscribe( r => console.log(r) );