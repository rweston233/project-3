// jshint esversion: 6

//Req. 4-b.
//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if ((n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0)) {
    result = `${result}Not`;
  }
  return result;
};

//Req. 4-c.
let findAllbitBatBotOrNots1 = arr => {
  const arr1 = arr.map(bitBatBotOrNot); // Mapping the array elements with bitBatBotOrNot function

  //Mapping the original array elements with the newly array created i.e arr1
  let arr2 = arr.map(function(x, i) {
    // Returning the elements with desired string format

    return `${x}: ${arr1[i]}`;
  });
  return arr2; // Finally returning the finally array .
};

//Red. 4-d.
let findAllbitBatBotOrNots2 = arr => {
  let resultArr = [];
    for (var i = 0; i < arr.length; i++) {
    resultArr.push( `${arr[i]}: ${bitBatBotOrNot(arr[i])}`);
    }
    return resultArr;
};

//Red. 4-e.
let findAllbitBatBotOrNots3 = arr => {
  let resultArr = [];
    for (elem of arr) {
    resultArr.push(`${elem}: ${bitBatBotOrNot(elem)}`);
  }
  return resultArr;
};

//Red. 4-f.
let findAllbitBatBotOrNots4 = arr => {
  let resultArr = [];
  arr.forEach(elem => {
    resultArr.push(`${elem}: ${bitBatBotOrNot(elem)}`);
  });
  return resultArr;
};

//XC
let findAllbitBatBotOrNotsXC = arr => {
  let resultArr = [];
  //  let arrStr = arr.join(" ");
  // console.log(resultArr);
  for (elem in arr) {
    //  if (resultArr[index] != " ") {
    resultArr.push(`${arr[elem]}: ${bitBatBotOrNot(elem)}`);
  }
  return resultArr;
};



//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
