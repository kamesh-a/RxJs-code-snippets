import {Observable} from 'rxjs/Rx';


Observable.from([1,2,3,5,6])
	.map( item => {
		return Observable.interval( item * 1000)
						.map( i => {
							return {item:item,time:i}
						})
	})
	.mergeAll()
	.subscribe( r => console.log(r))


// Observable.from([1,2,3,5,6])
// 	.flatMap( item => {
// 		return Observable.interval( item * 1000)
// 						.map( i => {
// 							return {item:item,time:i}
// 						})
// 	})
// 	.subscribe( r => console.log(r))