/*

Async subject is one of the variants of the subjects.

ReplaySubject     replay before or after completion
BehaviorSubject   replay one data before completion
AsyncSubject      replay one data after completion 
( similar to `last` but it has the capability to remember past data ).

Can be used to remember CPU intensive computed data.



*/

import {Observable,AsyncSubject} from 'rxjs/Rx';


let source = Observable.interval(1000).take(3)
let asyncSubject = new AsyncSubject();

source.subscribe(asyncSubject);

let observerOne = {
	next(r){
		console.log(`one : ${r}`);
	}
}

let observerTwo = {
	next(r){
		console.log(`two : ${r}`);
	}
}

asyncSubject
.do(() => { console.log('3secs up')})
.subscribe(observerOne);


setTimeout( () => asyncSubject
					.do(()=>{console.log('4secs up.')})
					.subscribe(observerTwo)
			,4000);

