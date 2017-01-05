import logger from './logger';
import Rx from 'rx';

let promise = new Promise( (res,rej ) =>{
	setTimeout(res.bind(null,'resolved'),5000);
});

Rx.Observable.fromPromise(promise)
	.subscribe( d => {
		logger.debug(d);
	});



let nativePromise = Rx.Observable.just(12,2)
	.toPromise();

nativePromise.
	then( value =>{
		logger.warn('Promise is getting resolved '+value);
	}).
	catch(e => {
		logger.error('We got an error '+e);
	})


let nativePromise2 = Rx.Observable.throw(new Error('Error throw'))
	.toPromise();

nativePromise2.
	then( value =>{
		logger.warn('Promise is getting resolved '+value);
	}).
	catch(e => {
		logger.error('We got an error '+e);
	})

