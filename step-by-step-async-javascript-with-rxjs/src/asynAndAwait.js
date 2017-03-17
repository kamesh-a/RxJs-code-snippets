import promise from 'bluebird';
import request from 'request';
import logger from './logger';
import {Observable}  from 'rxjs';

let requestPromised = promise.promisify(request.get);

async function getPublicInfo(){
	try {
		let results = [];

		let response1 = await requestPromised('https://api.github.com/gists/public',{
			json : true,
			headers: {
        		'User-Agent': 'request'
     	 	}
		});

		results.push(...response1.body);
		console.log(`Length after response 1 : ${results.length}`);

		let response2 = await requestPromised('https://api.github.com/gists/public',{
			json : true,
			headers: {
        		'User-Agent': 'request'
     	 	}
		});
		
		results.push(...response1.body);
		console.log(`Length after response 2: ${results.length}`);		

		results
			.forEach( (value , Index, Array) => {
				logger.info(value.url);
			})
	}
	catch (e){
		console.error('Catch this error ');
	}
}

getPublicInfo();


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
		// .forEach( d => console.log( d.url ) )
		// .subscribe( d => {
		// 	d.forEach( (value , Index, Array) => {
		// 		console.log(value.url);
		// 	})
		// });




