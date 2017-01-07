// more on filtering operator, with distinct.

import {Observable} from 'rxjs/Rx';

Observable.of(1,2,3,1,1,3,4,5)
	.distinct()
	.subscribe( r => console.log(r) )
