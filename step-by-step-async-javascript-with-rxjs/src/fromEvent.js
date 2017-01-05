import logger from './logger';
import Rx from 'rx';

/**
	We are going to explore eventEmitter.
*/
import HTTP from 'http';

// http://images.sb.a-cti.com/SB5/staging/js/auth.js

HTTP.request({
	hostname:'images.sb.a-cti.com',
	protocol:'http:',
	method:'get',
	path:'/SB5/staging/js/auth.js'
}, incomingMessage => {
	Rx.Observable
		.fromEvent( incomingMessage , 'data' )
		.subscribe( response => { logger.debug(response) })
})
.end();



/**
Tod:
	AsyncSubject
Diposable
Using
tap
mergeDelayError
*/