/* filter is not a static method. */

import {Observable} from 'rxjs/Rx';



function isUpdateAvailable(){
	return /darwin/.test(process.platform)
}



Observable.of(false)
	.filter( result => result )
	.subscribe( 
		r => console.log(r),
		e => console.error(e),
		() => console.info('completed')
	);


