import {Observable} from 'rxjs/Rx';


let ref = Observable.merge( error() )
	.take(1)
	.publishLast()

ref.connect();

ref.subscribe(x => {
	console.log('i m in sub');
	console.log(x)
},e =>  console.error(e.message))

function error(){
	return Observable.throw( new Error('Fuck off'));	
}