// When new oberserver connects. It will deliver the last recent value.

import {Observable,BehaviorSubject} from 'rxjs/Rx';


let source = Observable.interval(1000).take(4);

let bs = new BehaviorSubject('InitialValue');


source.subscribe(bs);

bs.subscribe({
	next( r ){
		console.log(`BS 1 ${r}`)
	}
});


setTimeout(function(){
	bs.subscribe({
		next(r){
			console.log(`BS 2 ${r}`)
		}
	})
},4000)
