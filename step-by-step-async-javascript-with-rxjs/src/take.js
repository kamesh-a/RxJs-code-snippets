import {Observable} from 'rxjs/Rx';


// we are going to take only specific number of events


Observable.interval(300)
	.take(5)
	.subscribe( r => console.log(r) );

/*

0
1
2
3
4

*/