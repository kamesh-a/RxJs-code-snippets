// combine two streams together to get the latest values.

import {Observable} from 'rxjs/Rx';


let inputOne$ = Observable.interval(1000);
let secondOne$ = Observable.from(['a','b','c','d','e']);


Observable.combineLatest(
			inputOne$,
			secondOne$
		)
		.take(4)
		.subscribe(
				x => console.log(x)
			)


/*

[ 0, 'e' ]
[ 1, 'e' ]
[ 2, 'e' ]
[ 3, 'e' ]


*/