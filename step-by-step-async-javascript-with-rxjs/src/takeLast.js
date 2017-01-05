import {Observable} from 'rxjs/Rx';

Observable.interval(100)
	.take(5) // making to complete sequence
	.takeLast(2) // we are taking last 2 elements
	.subscribe( x => console.log(x ))

/*

O/P :

3
4

*/