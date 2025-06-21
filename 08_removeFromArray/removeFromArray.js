const removeFromArray = function (arr, ...valuesToRemove) {
  for (let i = 0; i < 5; i++) {
    arr.map((item, index) => {
      if (valuesToRemove.includes(item)) {
        arr.splice(index, 1);
      }
    });
  }
  return arr;
};

console.log(
  removeFromArray([1, 3, 9, 18, 55, 34, 98, 5], 1, 3, 9, 18, 55, 34, 98, 5)
);
// Do not edit below this line
module.exports = removeFromArray;
