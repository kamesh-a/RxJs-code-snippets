import logger from './logger';
import Rx from 'rx';
/**
	First we are creating a cold observables,
	and subscribing to 2 subscribers.
*/
let steam = Rx.Observable
				.interval(1000)
				.take(5)
				.do( index => logger.debug(' do fn => '+index) );

let sub1 = steam.subscribe( i => logger.log('Sub1 => '+i) );
let sub2 = steam.subscribe( i => logger.log('Sub2 => '+i) );
