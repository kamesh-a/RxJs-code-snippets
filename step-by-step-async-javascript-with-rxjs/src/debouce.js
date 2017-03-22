/*

After certain time or period, source events are emitted
in observer ( at last ).
*/


import {Observable,Subject} from 'RxJs';


let source = new Subject(); 

setTimeout( () => source.next(1),100);

// Observable.from(source)
// 	.debounce(() => Observable.interval(1000))
// 	.subscribe(x => console.log(x));


Observable.from(source)
	.debounceTime(500)
	.timestamp()
	.subscribe(x => console.log(`${new Date(x.timestamp)} : ${x.value}`));


setTimeout( () => source.next(2),200);
setTimeout( () => source.next(3),300);
setTimeout( () => source.next(4),400);
setTimeout( () => source.next(5),500);
setTimeout( () => source.next(6),1100);
