import {Observable} from 'rxjs/Rx';

Observable.of([1,2,4])
	.subscribe( result => console.log(result));

/* spits out single value given => [ 1, 2, 4 ] */