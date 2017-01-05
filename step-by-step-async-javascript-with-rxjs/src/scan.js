import {Observable} from 'rxjs/Rx';

// We are going to see scan
// similar to reduce in javascript array


Observable.interval(200)
	.scan((acc) => {
		return acc + 1
	},0)
	.take(10)
	.subscribe( 
			r => console.log(r)
		)

/*

1
2
3
4
5
6
7
8
9
10

*/