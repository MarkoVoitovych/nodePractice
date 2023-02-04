let fact = function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return factorial(n - 1) * n;
  }
};

let fib = function fibonacchi(n) {
  if (n > 2) {
    return fibonacchi(n - 1) + fibonacchi(n - 2);
  } else {
    return 1;
  }
};

const logResultWrapper = fn => {
  return function (...args) {
    const result = fn(...args);
    console.log(result);
    return result;
  };
};

fact = logResultWrapper(fact);
fib = logResultWrapper(fib);

fib(15);
fact(15);
