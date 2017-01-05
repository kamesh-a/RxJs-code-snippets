import {Observable} from 'rxjs/Rx';

// We are going to see scan and reduce difference
// similar to reduce in javascript array


Observable.interval(200)
	.take(10)
	.reduce((acc,currentValue) => {
		console.log(`Accumated[${acc}], current[${currentValue}]`)
		return acc + 10
	},0)
	.subscribe( 
			r => console.log(r)
		)