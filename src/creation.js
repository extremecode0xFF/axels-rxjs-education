import {
  of, from, Observable, fromEvent, map, range, timer, interval,
} from 'rxjs';

const stream$ = of(1, 2, 3, 4, 5);

stream$.subscribe((value) => {
  console.log('stream$: ', value);
});

const arr$ = from([1, 2, 3, 4, 5]);

arr$.subscribe((value) => {
  console.log('arr$: ', value);
});

const observable$ = new Observable((observer) => {
  observer.next('First');

  setTimeout(() => observer.next('Second 1s'), 1000);

  //   setTimeout(() => observer.error('Error 1s'), 1000);
  //   setTimeout(() => observer.complete(), 1000);

  setTimeout(() => observer.next('Third 3s'), 3000);
});

observable$.subscribe(
  (value) => console.log('Value: ', value),
  (error) => console.log('Error:', error),
  () => console.log('Complete'),
);

// Alternative record
//
observable$.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log('Complete');
  },
});

fromEvent(document.querySelector('canvas'), 'mousemove')
  .pipe(
    map((event) => ({
      x: event.offsetX,
      y: event.offsetY,
      context: event.target.getContext('2d'),
    })),
  )
  .subscribe(({ x, y, context }) => {
    context.fillRect(x, y, 2, 2);
  });

const clear$ = fromEvent(document.getElementById('clear'), 'click');

clear$.subscribe(() => {
  const canvas = document.querySelector('canvas');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
});

const sub = interval(500).subscribe((value) => console.log(value));

setTimeout(() => {
  sub.unsubscribe();
}, 4000);

timer(2500).subscribe((value) => console.log(value));

range(42, 10).subscribe((value) => console.log(value));
