import {Observable} from 'rxjs/Rx';


Observable.interval(1000)
	.first()
	.subscribe(r => console.log(2))

// Only one value is printed out `1`