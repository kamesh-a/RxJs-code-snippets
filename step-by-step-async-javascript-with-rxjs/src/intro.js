import * as Rx from 'rx';
import logger from './logger'

let stream = Rx.Observable.create( observer => {
	observer.onNext('==== Stream of numbers ====');
	
	setTimeout(() => {
		observer.onNext('1');
	},0);


	setTimeout(() =>{
		observer.onNext('2');
	},0);

	setTimeout(() =>{
		observer.onNext('3');
	},0);

	setTimeout(() =>{
		observer.onNext('4');
	},0);


	return function dispose(){
		logger.warn('Dispose operation');
	}
});


let sub = stream.subscribe( 
		d => { logger.info(d); if(new RegExp(d,'ig').test('3')){ logger.warn('disposing manually '); sub.dispose();} },
		e => { logger.error('error : ',e);},
		() => { logger.debug('operation completed');}
	);