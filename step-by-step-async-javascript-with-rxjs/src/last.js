import {Observable} from 'rxjs/Rx';


Observable.interval(100)
	.timestamp()
	.take(10)
	.last()
	.subscribe(x => console.log(x))

/* 
	Only prints the last value 
	Timestamp { value: 9, timestamp: 1483350623408 }
*/