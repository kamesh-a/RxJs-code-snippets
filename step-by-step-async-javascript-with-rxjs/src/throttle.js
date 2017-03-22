import {Observable,Subject} from 'RxJs';

let source = new Subject(); 

setTimeout( () => source.next(1),100);

Observable.from(source)
	.throttle(() => Observable.interval(1000))
	.subscribe(x => console.log(x));


// Observable.from(source)
// 	.throttleTime(500)
// 	.timestamp()
// 	.subscribe(x => console.log(`${new Date(x.timestamp)} : ${x.value}`));


setTimeout( () => source.next(2),200);
setTimeout( () => source.next(3),300);
setTimeout( () => source.next(4),400);
setTimeout( () => source.next(5),500);
setTimeout( () => source.next(6),1100);