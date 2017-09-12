import xs from 'xstream';

function main() {
  return xs.periodic(1000)      // !--!--!--!--!--
    .fold(prev => prev + 1, 0)  // 0--1--2--3--4--
    .map(i => `seconds elapsed: ${i}`);
}

// need to separate logic from effects

function domDriver(text$) {
  text$.subscribe({
    next: str => {
      const elem = document.querySelector('#app');
      elem.textContent = str;
    }
  });
}

function logDriver(msg$) {
  msg$.subscribe({
    next: str => {
      console.log(str);
    }
  });
}

const sink = main();
logDriver(sink);
