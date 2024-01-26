const singleDigitNumbers = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const doubleDigitNumbers = {
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC",
};

const tripleDigitNumbers = {
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DX",
  7: "DXX",
  8: "DXXX",
  9: "CM",
};

const quadripleDigitNumbers = {
  1: "M",
  2: "MM",
  3: "MMM",
};

function returnValidNumber(number, array) {
  if (number == "0") {
    return "";
  } else {
    return array[number];
  }
}

function complexNumber(number, index, length) {
  if (length == 2) {
    switch (index) {
      case 0:
        return returnValidNumber(number, doubleDigitNumbers);
      case 1:
        return returnValidNumber(number, singleDigitNumbers);
    }
  } else if (length == 3) {
    switch (index) {
      case 0:
        return returnValidNumber(number, tripleDigitNumbers);
      case 1:
        return returnValidNumber(number, doubleDigitNumbers);
      case 2:
        return returnValidNumber(number, singleDigitNumbers);
    }
  } else if (length == 4) {
    switch (index) {
      case 0:
        return returnValidNumber(number, quadripleDigitNumbers);
      case 1:
        return returnValidNumber(number, tripleDigitNumbers);
      case 2:
        return returnValidNumber(number, doubleDigitNumbers);
      case 3:
        return returnValidNumber(number, singleDigitNumbers);
    }
  }
}

function determineNumber(number) {
  if (!Number(number)) return console.log("Not a number!");

  let stringifiedNumber = number.toString().split("");

  switch (stringifiedNumber.length) {
    case 1:
      return console.log(returnValidNumber(number, singleDigitNumbers));
    default:
      let romanNumeral = "";
      stringifiedNumber.forEach((number, index) => {
        romanNumeral += complexNumber(number, index, stringifiedNumber.length);
      });
      return console.log(romanNumeral);
  }
}

// determineNumber(7)
// determineNumber(82)
// determineNumber(999)
// determineNumber(3999)
