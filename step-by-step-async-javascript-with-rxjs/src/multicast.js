// We are trying to write multicast observable.	

 import {Observable,Subject} from 'rxjs/Rx';

 let subject = new Subject();
 let sourceConnectable = Observable.interval(300) 
 							.take(10)
 							.multicast(subject);


sourceConnectable.connect();
// NB: subject internal subscribtion automatically happens
// ex : source.subscribe(subject)

let obOne = {
	next (r){
		console.log(`first : ${r}`)
	}
}

let obTwo = {
	next (r){
		console.log(`second : ${r}`)
	}
}


sourceConnectable.subscribe(obOne)

setTimeout( ()=> sourceConnectable.subscribe(obTwo) ,2000 );

