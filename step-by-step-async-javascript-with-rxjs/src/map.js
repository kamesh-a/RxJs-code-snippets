import {Observable} from 'rxjs/Rx';


Observable.from([1,23,4,5,6])
	.map( item => {
		return item += item;
	})
	.subscribe( result => console.log(result) );
