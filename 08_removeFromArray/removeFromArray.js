const removeFromArray = function (arr, ...valuesToRemove) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (valuesToRemove.includes(arr[i])) {
      arr.splice(arr[i], 1);
      i--;
    }
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
