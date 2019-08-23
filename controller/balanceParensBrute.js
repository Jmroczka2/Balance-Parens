const balenceParens = (stringToTest) => {
  const keep = Array(stringToTest.length).fill(false);
  for (let i = 0; i < stringToTest.length; i++) {
    if (stringToTest[i] === '(') {
      for (let j = i + 1; j < stringToTest.length; j++) {
        if (keep[j] === false && stringToTest[j] === ')') {
          keep[i] = true;
          keep[j] = true;
          break;
        }
      }
    }
  }

  const result = [];
  let x = 0;
  for (let y = 0; y < stringToTest.length; y++) {
    if (keep[y] || (stringToTest[y] !== '(' && stringToTest[y] !== ')')) {
      result[x++] = stringToTest[y];
    }
  }

  return result;
};

console.log(balenceParens('ab((re())))f12>)'));
