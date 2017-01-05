import {Observable} from 'rxjs/Rx';

Observable.interval(1000)
	.subscribe( (...args) => console.log(args));

/*

[ 0 ]
[ 1 ]
[ 2 ]
[ 3 ]
[ 4 ]
[ 5 ]
[ 6 ]
[ 7 ]
[ 8 ]
[ 9 ]
[ 10 ]
[ 11 ]
[ 12 ]
[ 13 ]
[ 14 ]
[ 15 ]
[ 16 ]

*/