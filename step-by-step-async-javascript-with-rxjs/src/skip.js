import {Observable} from 'rxjs/Rx';


// skip first two events.


Observable.interval(1000)
	.skip(2)
	.subscribe( r => console.log(r) )

/*
	
	2
	3
	4
	
*/