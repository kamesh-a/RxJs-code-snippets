import {Observable} from 'rxjs/Rx';

Observable.from([11,12,3,4,5,6])
	.subscribe( x => console.log(x) );

/*

11
12
3
4
5
6

*/