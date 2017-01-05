import logger from './logger';
import Rx from 'rx';


let stream = Rx.Observable.timer(/*Initial delay */1000, /* Interval every 500 ms */500 )
				.timestamp()
				.take(5)
/**
	Was experimenting cold observables
	vs hot observables, this is perfect
	example for cold observables.


	ie, observable will start again the 
	sequence from begining.
*/
stream.subscribe( t => logger.warn(t.value+'-->'+t.timestamp)); 


setTimeout( function(){
	stream.subscribe( t => logger.debug(t.value+'-->'+t.timestamp)); 
},3500)