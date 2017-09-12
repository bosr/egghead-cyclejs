import xs from 'xstream';

// Logic
xs.periodic(1000)             // !--!--!--!--!--
  .fold(prev => prev + 1, 0)  // 0--1--2--3--4--
  .map(i => `seconds elapsed: ${i}`)

// need to separate logic from effects

// Effects
  .subscribe({
    next: str => {
      console.log(str);
      // const elem = document.querySelector('#app');
      // elem.textContent = str;
    }
  });
