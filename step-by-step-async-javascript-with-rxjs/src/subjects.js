import {Observable,Subject} from 'rxjs/Rx';

let source = Observable.interval(1000).take(5);

let subject = new Subject();

source.subscribe(subject);


subject.subscribe( r => console.log(`Subject 1 : ${r}`) );

setTimeout( () => {
	subject.subscribe( r => console.log(`Subject 2 : ${r}`) );
},3000)


/*

Subject 1 : 0
Subject 1 : 1
Subject 1 : 2
Subject 2 : 2
Subject 1 : 3
Subject 2 : 3
Subject 1 : 4
Subject 2 : 4


*/