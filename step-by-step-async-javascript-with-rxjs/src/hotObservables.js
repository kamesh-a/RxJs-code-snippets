import logger from './logger';
import Rx from 'rx';

/**
* check cold observable examples
* Converting cold observable into hot-Observable
*/

let steamHot = Rx.Observable
				.interval(1000)
				.take(15)
				.do( index => logger.debug(' Hot-do fn => '+index) );

let publish = steamHot.publish();

let sub1 = publish.subscribe( i => logger.log('Hot-Sub1 => '+i) );

setTimeout(function(){
	let sub2 = publish.subscribe( i => logger.log('Hot-Sub2 => '+i) );
},5000);

publish.connect();









