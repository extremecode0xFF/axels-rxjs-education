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

  const interval = setInterval(() => {
    if (people[index]) {
      if (people[index].age >= 18) {
        list.push(people[index].name);
      }
      display.textContent = list.join(', ');
      index += 1;
    } else {
      clearInterval(interval);
      btn.disabled = false;
    }
  }, 1000);
});
