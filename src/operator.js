import { interval } from 'rxjs';
import {
  filter, map, reduce, scan, take, takeLast, takeWhile, tap,
} from 'rxjs/operators';

const stream$ = interval(1000)
  .pipe(
    tap((value) => console.log('Tap: ', value)),
    // map((value) => value * 3),
    // filter((value) => value % 2 === 0),
    take(10),
    // takeLast(5),
    // takeWhile((value) => value < 42),
    scan((acc, value) => acc + value, 0),

    // this operator running after close stream
    reduce((acc, value) => acc + value, 0),
  );

stream$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Complete'),
});
