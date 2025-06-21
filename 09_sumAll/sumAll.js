const sumAll = function (num1, num2) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    num1 < num2 &&
    Number.isInteger(num1, num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    let numbersArr = [];
    for (let i = num1; i <= num2; i++) {
      numbersArr.push(i);
    }
    return numbersArr.reduce((acc, current) => acc + current);
  } else if (num1 > num2) {
    let numbersArr = [];
    for (let i = num2; i <= num1; i++) {
      numbersArr.push(i);
    }
    return numbersArr.reduce((acc, current) => acc + current);
  } else return "ERROR";
};

console.log(sumAll(45, 10));

// Do not edit below this line
module.exports = sumAll;
