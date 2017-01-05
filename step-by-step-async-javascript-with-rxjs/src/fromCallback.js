import logger from './logger';
import Rx from 'rx';

/**
	We are going to explore eventEmitter.
	We are re-writing with fromCallback method.
*/
import HTTP from 'http';

// http://images.sb.a-cti.com/SB5/staging/js/auth.js


var rxRequest = Rx.Observable.fromCallback(HTTP.get)


rxRequest('http://images.sb.a-cti.com/SB5/staging/js/auth.js')
	.timeout(1000)
	.flatMap( value => Rx.Observable.fromEvent(value,'data'))
	.subscribe( 
			d => logger.log(d),
			e => console.error('=== Error ====',e)
		);