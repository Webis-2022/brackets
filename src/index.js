module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = {};
  let openBrackets = [];
  let closeBrackets = new Set();

  bracketsConfig.forEach(([open, close]) => {
    bracketsMap[close] = open;
    openBrackets.push(open);
    closeBrackets.add(close);
  });

  for (let char of str) {
    if (openBrackets.includes(char)) {
      if (bracketsMap[char] === char) {
        if (stack[stack.length - 1] === char) {
          stack.pop(); 
        } else {
          stack.push(char); 
        }
      } else {
        stack.push(char);
      }
    } 
    else if (closeBrackets.has(char)) {
      if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

























