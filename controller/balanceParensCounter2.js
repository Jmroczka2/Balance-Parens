const balenceParens = (stringToTest) => {
  const keep = stringToTest.split('');
  let counter = 0;

  // Forward pass
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

  // Backwards pass
  for (let i = keep.length - 1; i >= 0 && counter !== 0; i--) {
    if (keep[i] === '(') {
      counter -= 1;
      keep[i] = false;
    }
  }

  return keep.join('').replace(/false/g, '');
};

console.log(balenceParens('(as()()))dg)'));
