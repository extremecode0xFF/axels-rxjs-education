import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

document.addEventListener('click', () => {
  const stream$ = new Subject();

  stream$.subscribe((value) => console.log('Value:', value));

  stream$.next('-----Subject-----');
  stream$.next('Hello');
  stream$.next('RX');
  stream$.next('JS');
});

document.addEventListener('click', () => {
  const stream$ = new BehaviorSubject('-----BehaviorSubject-----');

  stream$.subscribe((value) => console.log('Value:', value));

  stream$.next('Hello');
  stream$.next('RX');
  stream$.next('JS');
});

document.addEventListener('click', () => {
  const stream$ = new ReplaySubject(4);

  stream$.next('-----ReplaySubject-----');
  stream$.next('Hello');
  stream$.next('RX');
  stream$.next('JS');

  stream$.subscribe((value) => console.log('Value:', value));
});
