import {Observable} from 'rxjs/Rx';

Observable.of(1,2,3,3,3,4,5)
	.zip(Observable.interval(300), (x,y) => x)
	.distinctUntilChanged()
	.subscribe( r => console.log(r) )