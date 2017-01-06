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

O/P : Completed


*/

// WithLatestFrom is `AND` type operator. we can even call it as mapWithLatestFrom.

/*
	
	----H----E----L----L----O|
		withLatestFrom((x,y) => y )
	---0----1---1---0---0|

	----h----E----L----l----o (O/P)

*/

/*
	
	----H----E----L----L----O|
		combineLatest((x,y) => y )
	---0----1---1---0---0|

	----h---HE--E-L-l--ll---o (O/P)

*/

let source = Observable.interval(500)
	.zip(Observable.of('H','E','L','L','O') , (interval,character) => character )

let latest = Observable.interval(400)
	.zip(Observable.from([0,1,1,0,0]),(interval,binary) => binary )

	source.withLatestFrom(latest , (character, binary) => {
			return binary ? character.toUpperCase() : character.toLowerCase();
		})
		.subscribe (x => console.log(x));
