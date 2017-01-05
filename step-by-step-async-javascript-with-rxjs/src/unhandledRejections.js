/* 
	Idea of this code is demonstrate unhandled code rejections, mordern
	compilers should warn about unhandled code rejections instead of
	silently discarding them.


*/
async function foo() {
    throw new Error('Problem!');
}
foo();


/* 

O/P : 
	(node:68074) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Problem! 

*/