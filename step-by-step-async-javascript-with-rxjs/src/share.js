import {Observable} from 'rxjs/Rx';


// Sharing data to stream rather than subscribing again.

let obs = Observable.interval(200)
				

obs
	.startWith('Baby Ma')
	.timeInterval()
	.subscribe( r => console.log(r) )


obs

.subscribe(r => console.log(`Both should be duplicated ${r}`));