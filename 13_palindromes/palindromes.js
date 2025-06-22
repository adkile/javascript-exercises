const palindromes = function (str) {
  let cleanedStr = str.toLowerCase().replace(/[,. !?]/gi, "");
  let strArr = cleanedStr.split(" ").join("");
  let reversedStr = cleanedStr.split("").reverse().join("");

  if (strArr === reversedStr) {
    return true;
  } else return false;
};

console.log(palindromes("A nut for a jar of tuna."));

// Do not edit below this line
module.exports = palindromes;
