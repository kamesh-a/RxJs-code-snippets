// delay first data by number of seconds specified
import {Observable} from 'rxjs/Rx';

/*

(KAMESH)|			(from Observable)
	delay(2000)		
---------(KAMESH|)	(Output)

*/
Observable.from('KAMESH'.split(''))
	.delay(2000)
	.subscribe( r => console.log(r) )


