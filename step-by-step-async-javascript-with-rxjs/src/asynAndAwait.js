import promise from 'bluebird';
import request from 'request';
import logger from './logger';
import {Observable}  from 'rxjs';

let requestPromised = promise.promisify(request.get);

// async function getPublicInfo(){
// 	try {
// 		let response = await requestPromised('https://api.github.com/gists/public',{
// 			json : true,
// 			headers: {
//         		'User-Agent': 'request'
//      	 	}
// 		});
		
// 		response			
// 			.body
// 			.forEach( (value , Index, Array) => {
// 				logger.info(value.url);
// 			})
// 	}
// 	catch (e){
// 		console.error('Catch this error ');
// 	}
// }

// getPublicInfo();


/* 

	-- response --




*/


console.log(Observable.fromPromise);

Observable.fromPromise(requestPromised('https://api.github.com/gists/public',{
			json : true,
			headers: {
        		'User-Agent': 'request'
     	 	}
		}))
		.map( d => { console.log(' ===  map === '); return d.body }  )
		.forEach( d => console.log( d ) )
		// .subscribe( d => console.log(" ==== sub ===== ") );




