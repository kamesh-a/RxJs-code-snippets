// deprecated 

import {Observable} from 'rxjs';
import Rx from 'rx';
import logger from './logger';



let sources = {
	'one' : Observable.from([4,5 ,6]),
	'two' : Observable.of("helloworld")
};


Rx.Observable.case( () => 'one', sources )
	.forEach( d => logger.log(d))