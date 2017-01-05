/**
	We are going to work with repeat in rx;
	basically it re-subscribes to the observer 
	agains once it finds it go completed.
*/


import {Observable} from 'rxjs/Rx';

Observable.from([1,2,4,5,6])
	.take(3)
	.repeat()
	.subscribe( 
			r => console.log(r),
			e => console.error(e),
			() => console.log('It should not completed')
		)


/*
	OUTPUT: 
		CALL STACK WILL EXCEED , bcoz it running infinitely.
*/

// NB : Better example would be to use event emitter to emit customevent.