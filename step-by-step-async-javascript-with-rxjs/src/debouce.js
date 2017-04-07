/*

After certain time or period, source events are emitted
in observer ( at last ).

Difference between throttle and debounce is

Debounce will till emits are stopped completely for specified
time, and them only it will emit the Last event.
*/


import {Observable,Subject} from 'RxJs';


let source = new Subject(); 

setTimeout( () => source.next(1),100);

Observable.from(source)
	.debounce(() => Observable.interval(500))
	.subscribe(x => console.log(x));


// Observable.from(source)
// 	.debounceTime(500)
// 	.timestamp()
// 	.subscribe(x => console.log(`${new Date(x.timestamp)} : ${x.value}`));


setTimeout( () => source.next(2),200);
setTimeout( () => source.next(3),300);
setTimeout( () => source.next(4),400);
setTimeout( () => source.next(5),500);
setTimeout( () => source.next(6),1100);


/*

 Both example are same but variation is one
 takes the milliseconds another takes obserable event.

 -1-2-3-4-5------6
	debounce(500)
 ---------5------6

 */
