// Zip is similar to AND operator

import {Observable} from 'rxjs/Rx';

Observable.interval(1000)
	.zip(Observable.of('h','e','-','m','a','n'), (x,y) => y)
	.subscribe( x => { console.log (x) } )