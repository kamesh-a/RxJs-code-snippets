import {Observable} from 'rxjs/Rx';

let observerToWatch = Observable.create( (observer) => {
	setTimeout( () => {
		console.log('Going to emit');
		observer.next('Observer to Watch completed');
	},2000);
});

Observable.interval(200)
	.timestamp()
	.timeInterval()
	.pluck('value')
	.pluck('timestamp')
	.takeUntil(observerToWatch)
	.subscribe( 
			{
				next(x){
					console.log(x)
				},
				error(e) {
					console.log('Should never run')
				},
				complete() { 
					console.log('done')
				}
			}
		)