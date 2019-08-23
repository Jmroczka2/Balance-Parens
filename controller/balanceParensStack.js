const balenceParens = (stringToTest) => {
    let keep = Array(stringToTest.length).fill(false);
    let stack = [];

    for (let i = 0; i < stringToTest.length; i++) {
      if (stringToTest[i] === '(') {
        stack.push(i);
        keep[i] = stringToTest[i];
      }
      else if (stringToTest[i] === ')') {
        if (stack.length > 0) {
          stack.pop();
          keep[i] = stringToTest[i];
        }
      }
      else {
        keep[i] = stringToTest[i];
      }
    }

    for (let x = 0; x < stack.length; x++) {
      keep[stack[x]] = false;
    }
  
    return keep.join('').replace(/false/g, '');
  };
  
  console.log(balenceParens('a)))((zf)())('));