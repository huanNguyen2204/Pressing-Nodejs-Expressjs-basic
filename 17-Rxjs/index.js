import { from, Observable, Subject } from "rxjs";
import { createServer } from "http";
import { filter, map, tap } from "rxjs/operators";

const array = [2, 3, 9, 8, 4, 1, 5, 6, 7];

from(array)
  .pipe(
    filter((element) => element % 2 === 0),
    map((element) => element * element)
  )
  .subscribe((data) => {
    console.log(data);
  })

const observable1 = Observable.create((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count++ < 10) {
      observer.next("Data package " + count);
    } else {
      observer.complete();
      clearInterval(interval);
    }
  }, 500);
});

const observable2 = Observable.create((observer) => {
  observer.next("Hello");
  observer.next("World");
  observer.error("An error");
  observer.complete();
})

// observable.subscribe((data) => console.log(data));
// observable2.subscribe(
//   (data) => console.log("Data: ", data),
//   (error) => console.log("Error: ", error),
//   (finished) => console.log("Finished"),
// )

const httpObservable = Observable.create((observer) => {
  createServer((request, response) => 
    observer.next({ request, response }),
  ).listen(8080, () => console.log("Server is listening"))
})

const logger = ({ request }) => console.log("requesting: ", request.url);

// httpObservable
//   .pipe(tap(logger))
//   .subscribe(({ _request, response }) => {
//     response.end("Hello Rxjs")
//   })


const observable = Observable.create((observer) => {
  setTimeout(() => {
    observer.next(Math.random());
  }, 1000);
});

observable.subscribe((data) => console.log("Observer 1", data));
observable.subscribe((data) => console.log("Observer 2", data));

const subject = new Subject();

subject.subscribe((data) => console.log("Subject observer 1", data));
subject.subscribe((data) => console.log("Subject observer 2", data));

subject.next(Math.random());