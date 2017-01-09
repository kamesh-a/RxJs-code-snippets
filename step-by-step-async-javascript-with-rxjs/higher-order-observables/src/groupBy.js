import * as Rx from 'rxjs/Rx';

const busObservable = Rx.Observable.of(
  {code: 'en-us', value: '-TEST-'},
  {code: 'en-us', value: 'hello'},
  {code: 'es', value: '-TEST-'},
  {code: 'en-us', value: 'amazing'},
  {code: 'pt-br', value: '-TEST-'},
  {code: 'pt-br', value: 'olá'},
  {code: 'es', value: 'hola'},
  {code: 'es', value: 'mundo'},
  {code: 'en-us', value: 'world'},
  {code: 'pt-br', value: 'mundo'},
  {code: 'es', value: 'asombroso'},
  {code: 'pt-br', value: 'maravilhoso'}
).concatMap(x => Rx.Observable.of(x).delay(100));

const all = busObservable
  .groupBy(obj => obj.code)
  .mergeMap(lGroup => lGroup.skip(1)
                    .reduce((a, c) => {
                      return [...a,c.value]
                    }, []))
  .reduce( (acc,current) => {
    return [...acc,...current]
  },[])

all.subscribe(x => console.log(x),e => console.error(e),() => console.log('completed'));