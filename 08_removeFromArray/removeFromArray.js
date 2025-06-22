const removeFromArray = function (arr, ...valuesToRemove) {
  let newArr = arr.filter((item) => {
    return !valuesToRemove.includes(item);
  });
  return newArr;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 3, 4));
// Do not edit below this line
module.exports = removeFromArray;
