/**
	Refcount is similar to,
	one subscribtions is active sequence will 
	produce values or else it will wait until
	another subscription comes in.

    Whenever you watch a movie, your run of the movie is independent of anyone
else's run, even though all movie watchers see the same effects. On the other
hand, a live performance is shared to multiple viewers. If you arrive late to
a live performance, you will simply miss some of it. However, if it was
recorded on video (in RxJS this would happen with a BehaviorSubject or a
ReplaySubject), you can watch a "movie" of the live performance. A
.publish().refCount() live performance is one where the artists quit playing
when no one is watching, and start playing again when there is at least one
person in the audience.


Notes:

	-> Every new subscription will start again
	in case of refcount they will contine, until
	one susbcriber is alive or else it will stop/start
	freshly
*/

import logger from './logger';
import Rx from 'rx';


let steam = Rx.Observable
				.interval(1000)
				.take(25)
				.do( index => logger.debug(' do fn => '+index) );

let publish  = steam.publish().refCount();
// publish.connect();

let sub1 = publish.subscribe( i => logger.log('Sub1 => '+i) );
let sub2;

setTimeout(function(){
	 sub2 = publish.subscribe( i => logger.log('Sub2 => '+i) );
	 sub1.dispose();
},5000);

setTimeout(function(){
	sub2.dispose();
},8000);


setTimeout(function(){
	let sub3 = publish.subscribe( i => logger.log('Sub3 => '+i) );
},9000);



