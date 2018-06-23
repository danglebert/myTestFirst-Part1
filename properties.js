console.log('________________________');

let object = {};

// const setPropsOnObj = anObj => {
//   anObj.x = 7;
//   anObj.y = 8;
//   anObj.onePlus = function(num) {
//     return 1 + num;
//   }
// }
// setPropsOnObj(object);
// console.log(object.onePlus(5));



// ___________________________________ //

const setPropsOnArr = (anArr) => {
  anArr['hello'] = function () {
    return 'Hello!';
  }
  anArr['full'] = 'stack';
  anArr[0] = 5;
  anArr['twoTimes'] = function (num) {
    return num * 2;
  }
}

let arr = [1, 2, 3, 4]

setPropsOnArr(arr);

console.log(arr.full);
// ____________________________________ //

// const setPropsOnFunc = aFunc => {
//   aFunc['year'] = '20??';
//   aFunc['divideByTwo'] = function (num) {
//     return num / 2;
//   }
//   aFunc.prototype['helloWorld'] = function () {
//     return 'Hello World';
//   }
// }
