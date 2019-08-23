const balenceParens = (stringToTest) => {
  const keep = stringToTest.split('');
  let counter = 0;

  for (let i = 0; i < keep.length; i++) {
    if (keep[i] === '(') {
      counter += 1;
    } else if (keep[i] === ')') {
      if (counter === 0) {
        keep[i] = false;
      } else {
        counter -= 1;
      }
    }
  }

  // Reset Counter
  counter = 0;

  // Backwards pass
  for (let i = keep.length - 1; i >= 0; i--) {
    if (keep[i] === ')') {
      counter += 1;
    } else if (keep[i] === '(') {
      if (counter === 0) {
        keep[i] = false;
      } else {
        counter -= 1;
      }
    }
  }

  return keep.join('').replace(/false/g, '');
};

console.log(balenceParens('()()'));
