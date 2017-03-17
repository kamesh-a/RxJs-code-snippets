// Replay subject is similar to behaviour subject but
// it will be able to store events based on maximum
// buffer size provided and it has `windowSize/expiration-time` for 
// each data based on time.


import {Observable,ReplaySubject} from 'rxjs/Rx';

// WindowSize will be included in next one.
// windowsSize is similar to expiration time.


/*

--0--1--2--3--4--5.. ( Interval(300) )		
--0--1--2--3--4--5|  (take(6))
	Relay

--0--1--2--3--4--5| (observerOne)
		-123--4--5|	(observerTwo)
		
*/

let maxBufferStoreLimit = 2;
let source  = Observable.interval(300).take(6);
let replay = new ReplaySubject(maxBufferStoreLimit);

source.subscribe(replay);


let observerOne = {
	next(r){
		console.log(`one : ${r}`)
	},
	complete(){
		console.log(`Observer complete`)
	}
};

let observerTwo = {
	next(r){
		console.log(`two : ${r}`)
	}
};

replay.subscribe(observerOne)


setTimeout(function(){
	replay.subscribe(observerTwo)	
},3000)