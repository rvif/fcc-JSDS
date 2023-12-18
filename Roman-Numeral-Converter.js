function convertToRoman(num) {
  const valueToRomanNum = [
    { value: 1000, num: "M" },
    { value: 900, num: "CM" },
    { value: 500, num: "D" },
    { value: 400, num: "CD" },
    { value: 100, num: "C" },
    { value: 90, num: "XC" },
    { value: 50, num: "L" },
    { value: 40, num: "XL" },
    { value: 10, num: "X" },
    { value: 9, num: "IX" },
    { value: 5, num: "V" },
    { value: 4, num: "IV" },
    { value: 1, num: "I" }
  ];

  let result = "";

  for (let i = 0; i < valueToRomanNum.length; i++) {
    while (num >= valueToRomanNum[i].value) {
      result += valueToRomanNum[i].num;
      num -= valueToRomanNum[i].value;
    }
  }
  return result;
}

console.log(convertToRoman(798)); // DCCXCVIII
