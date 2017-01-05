/* similar to combineLatest but, one stream complets it automatically complets the merge */

import {Observable} from 'rxjs/Rx';


let inputOne$ = Observable.interval(1000);
let secondOne$ = Observable.from(['a','b','c','d','e']);


secondOne$
.withLatestFrom(
			inputOne$
		)
		.subscribe(
				x => console.log(x),
				e => console.log('No error ? ',e),
				() => console.log('Completed')
			)


/*

Because secondOne$ stream complted with 'e' as last value.
Completed


*/