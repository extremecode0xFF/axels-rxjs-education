import { interval } from 'rxjs';
import {
  filter, map, scan, take,
} from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#problem .result');

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 },
];

btn.addEventListener('click', () => {
  btn.disabled = true;
  let index = 0;
  const list = [];

  const ninterval = setInterval(() => {
    if (people[index]) {
      if (people[index].age >= 18) {
        list.push(people[index].name);
      }
      display.textContent = list.join(', ');
      index += 1;
    } else {
      clearInterval(ninterval);
      btn.disabled = false;
    }
  }, 1000);
});

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;

  interval(1000)
    .pipe(
      take(people.length),
      filter((index) => people[index].age >= 18),
      map((index) => people[index].name),
      scan((acc, value) => acc.concat(value), []),
    )
    .subscribe((res) => { display.textContent = res.join(', '); }, null, () => {
      rxjsBtn.disabled = false;
    });
});
