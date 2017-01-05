import  { logger,Rx } from './imports'

// let range = Rx.Observable.range(1,3)

// 	range.zip(
// 			Rx.Observable.from([5,4,6])
// 			,Rx.Observable.from([7,8,9])
// 			,(...args) => { console.log('zip : ',...args); return args[0]})
// 	.subscribe( d => console.log(d));


Rx.Observable.create(function (o) {
    o.onError(new Error("always fails"));
  }).retryWhen(function (attempts) {
      return Rx.Observable.range(1, 3)
      		.zip(attempts, function (i) { return i; }) // if we dont use zip, it will not combile the steam so it will iteratively produce value which we dont want.
      		.flatMap(function (i) {
      		console.log('Value we are loocking ',i)
	        // console.log("delay retry by " + i + " second(s)");
	        return Rx.Observable.timer(i * 1000);
    	  });
	}).subscribe( d => console.warn('data : ',d));


/** 

Map:
-- error -- error -- error --
	retryWhen(err)
-- 1 -- 2 -- 3 --
	zip ( range(1,3) , errStream )
--  ( 1,error ) --  (2,error) -- (3,error) --
	map (i) => timer
1 -- 1000ms
2 -- 1000ms
3 -- 1000ms


FlatMap : 
-- error -- error -- error --
	retryWhen(err)
-- 1 -- 2 -- 3 --
	zip ( range(1,3) , errStream )
--  ( 1,error ) --  (2,error) -- (3,error) --

	flatMap (i) => timer

1 -- 1000ms
2 -- 1000ms
3 -- 1000ms


-- 1000 ms --1000 ms  -- 1000ms

**/