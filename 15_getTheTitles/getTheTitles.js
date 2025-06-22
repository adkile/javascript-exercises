const books = [
  { title: "Le petit asticot", author: "Jean Blonblon" },
  { title: "La grande girafe", author: "Jeanne Blondeblonde" },
];

const getTheTitles = function (arr) {
  let newArr = [];
  for (const item of arr) {
    newArr.push(item.title);
  }
  return newArr;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
