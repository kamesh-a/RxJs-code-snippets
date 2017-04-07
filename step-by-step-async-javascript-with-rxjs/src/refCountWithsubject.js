import * as Rx from 'rxjs/Rx';

let shared = Rx.Observable
				.interval(1000)
				.take(10)
				// .do( index => console.log(' do fn => '+index) )
				.multicast(new Rx.Subject())
				.refCount()
// shared.connect();

let sub1 = shared.subscribe( i => console.log('Sub1 => '+i) );
let sub2;

setTimeout(function(){
	 sub2 = shared.subscribe( i => console.log('Sub2 => '+i) );
	 sub1.unsubscribe();
},5000);

setTimeout(function(){
	sub2.unsubscribe();
},8000);


setTimeout(function(){
	let sub3 = shared.subscribe( i => console.log('Sub3 => '+i) );
},9000);
