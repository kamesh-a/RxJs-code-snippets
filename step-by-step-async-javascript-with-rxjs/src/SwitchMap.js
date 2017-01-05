import {Observable} from 'rxjs/Rx';
import debug from 'debug';

Observable.range(0,3)
	.switchMap( x => Observable.range(x,3) , (x,y,i,j) => { return `x[${x}] -> y[${y}]`} )
	.subscribe( x =>  console.log(x));

/*

x[0] -> y[0]
x[0] -> y[1]
x[0] -> y[2]
x[1] -> y[1]
x[1] -> y[2]
x[1] -> y[3]
x[2] -> y[2]
x[2] -> y[3]
x[2] -> y[4]

*/