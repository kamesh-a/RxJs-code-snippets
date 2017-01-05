import logger from './logger';
import Rx from 'rx';


let stream = Rx.Observable.of(1,2,3)
				.flatMap( 
					function* (x,i) {
						logger.log(i+ " -> "+x);
						yield x;
						yield i;
					},
					// function(x,i) {
					// 	logger.log("from observable "+i+ " -> "+x);
					// 	return Rx.Observable.from([x,i]);
					// 	//      0 1
					// },
					(x,y,outerIndex,innerIndex)=>{
					/*
						oi ov ii iv 
						0  1  0  1
						0  1  1  0
						1  2  0  2
						1  2  1  1

						oi = outer index
						ov = outer value
						ii = inner index
						iv = inner value

						two samples here 
						1 => [ 1, 0]
						2 => [ 2, 1]
						3 => [ 3, 2]
					*/
						logger.warn(outerIndex+" : outer : "+x);
						logger.warn(innerIndex+" : inner : "+y);

						return x+y+outerIndex+innerIndex;
					}
				);


	stream.subscribe(x => logger.warn(x))


