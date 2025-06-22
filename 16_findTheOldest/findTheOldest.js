const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arr) {
  let oldestPerson = [];
  oldestPerson.push(people[0]);

  for (const item of arr) {
    let timespan = item.yearOfDeath
      ? item.yearOfDeath - item.yearOfBirth
      : 2025 - item.yearOfBirth;
    let oldestPersonTimespan = oldestPerson[0].yearOfDeath
      ? oldestPerson[0].yearOfDeath - oldestPerson[0].yearOfBirth
      : 2025 - oldestPerson[0].yearOfBirth;

    if (timespan > oldestPersonTimespan) {
      oldestPerson[0] = item;
    }
  }

  return oldestPerson[0];
};

console.log(findTheOldest(people).name);
// Do not edit below this line
module.exports = findTheOldest;
