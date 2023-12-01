const fs = require("fs");
const path = require("path");

const partOne = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((el) => {
    // get first digit
    const firstDigit = el.match(/\d/)[0];
    // get last digit
    const lastDigit = el.match(/(\d)[a-z]*$/)[1];

    // convert string to num
    return parseInt(`${firstDigit}${lastDigit}`);
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(partOne);

const partTwo = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((el) => {
    const numberMap = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    Object.keys(numberMap).forEach((key) => {
      if (el.includes(key))
        el = el.replaceAll(key, `${key}${numberMap[key]}${key}`);
    });
    const firstDigit = el.match(/\d/)[0];
    const lastDigit = el.match(/(\d)[a-z]*$/)[1];
    return parseInt(`${firstDigit}${lastDigit}`);
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(partTwo);
