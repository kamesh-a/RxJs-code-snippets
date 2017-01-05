import logger from './logger';
import Rx from 'rx';

const THINGS = [
	'Kamesh',
	'Loves',
	'Leaning',
	'New',
	'Things'
];


/*
	Map
	Marble diagram:

	--Kamesh--Loves--Learning--New--Things--
	
	.map((item,index)=> index+' -> 'item )
	
	-- 0 -> Kamesh -- 1 -> Loves--2 -> Learning --

	so on.
*/
Rx.Observable.from(THINGS)
	.map( (item,index ,stream) => {
		// we are transforming the items.
		return index +' -> ' +item;
	})
	.subscribe( value => { 
		logger.debug(value);
	})


/**
	We are going to check about
	Observable sequence of Observable sequences
	ex:  steam in which each item is steam.

	Marble Diagram;

	--Kamesh--Loves--Learning--New--Things--

	.flatMap( item, index ) => Rx.Observable.of( index +' -> ' +item );

	-- 0 -> Kamesh --
	-- 1 -> Loves --
	-- 2 -> Learning --

	Last part is merged into single stream.
	-- 0 -> Kamesh -- 1 -> Loves--2 -> Learning --

so on

*/

// Unmodified 
Rx.Observable.from(THINGS)
	.map((item,i) => {
		return Rx.Observable.of(i+' -> '+item);
	})
	.subscribe( item => {
		logger.warn(item)
	})


// Modified
Rx.Observable.from(THINGS)
	.flatMap((item,i) => {
		return Rx.Observable.of(i+' -> '+item);
	})
	.subscribe( item => {
		logger.debug(item)
	})


// We can use mergeAll with two steps along with map
Rx.Observable.from(THINGS)
	.map((item,i) => {
		return Rx.Observable.of(i+' -> '+item);
	})
	.mergeAll()
	.subscribe( item => {
		logger.info('merged : '+item)
	})




