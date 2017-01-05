import {Observable} from 'rxjs/Rx';
import {EventEmitter} from 'events';

let emitter = new EventEmitter();
Observable.fromEvent(emitter,'data')
	.take(1)
	.repeat()
	.subscribe( 
			x => console.log(x),
			e => {},
			() => console.log('completed')
		);

emitter.emit('data','come on baby');

/*

By default fromEvent will be always open,
But still for the purpose of demo.
we are going to take only one event and then 
repeat it so it never gets completed.

remove `repeat` command to see `completed` message.

*/
