const fibonacciSuite = [0, 1];

function createFibonacciSuite(num) {
  for (let i = 2; i < num; i++) {
    fibonacciSuite.push(fibonacciSuite[i - 1] + fibonacciSuite[i - 2]);
  }
}

const fibonacci = function (num) {
  createFibonacciSuite(num + 1);
  if (num < 0) {
    return "OOPS";
  } else return fibonacciSuite[num];
};

console.log(fibonacci(38));

// Do not edit below this line
module.exports = fibonacci;
