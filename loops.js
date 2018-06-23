console.log('_____________________')

// Pt 1
function repeat (aStr, count) {
  let answer = '';

  for (let i = 1; i <= count; ++i) {
    answer += aStr;
  }
  return answer;
}

//Pt 2 line 34

function sum (anArr) {
  return anArr.reduce((total, elem) => total += elem, 0);
}


// Pt 3 line 53

function join (anArr, joiner = '') {
  let preAnswer = anArr.reduce((str, elem) => str = str + elem + joiner, '');
  if (preAnswer[preAnswer.length - 1] === joiner) return preAnswer.slice(0, -1);
  else return preAnswer;
}
// console.log(join(['apple', 'banana', 'cherry'], '/'));


// Pt 4 line 100
function gridGenerator(num) {
  let str = '';
  for (let i = 1; i <= num; ++i) {
    let innerStr = '';

    for (let j = 1; j <= num; ++j) {
      let innerInnerStr = '';

      if (i % 2) {
        if (j % 2) innerInnerStr += '#';
        else innerInnerStr += ' ';
        innerStr += innerInnerStr;
      } else {
        if (j % 2) innerInnerStr += ' ';
        else innerInnerStr += '#';
        innerStr += innerInnerStr;
      }
    }

    str += innerStr + '\n';
  }
  return str;
}

// console.log(gridGenerator(3));




// Pt 5 line 124

function paramify(anObj) {
  let keyArr = [];
  let answer = ''

  for (let keys in anObj) {
    if (anObj.hasOwnProperty(keys)) keyArr.push(keys);
  }
  keyArr.sort();

  for (let i = 0; i < keyArr.length; i++) {
    let currentKey = keyArr[i];
    let currentValue = anObj[currentKey];
    if (i === 0) answer += currentKey + '=' + currentValue;
    else answer += '&' + currentKey + '=' + currentValue;
  }
  return answer;
};

var Alphabet = function() {
  this.a = 1;
  this.b = 2;
};

Alphabet.prototype.c = 3
var alphabet = new Alphabet();

// console.log(paramify(alphabet));


// var object = {f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
// console.log(paramify(object));
// ("a=1&b=2&c=3&d=4&e=5&f=6");

// Pt 6 line 188
function paramifyObjectKeys(anObj) {
  let keys = Object.keys(anObj).sort();
  let answer = ''

  for (let i = 0; i < keys.length; i ++) {
    let currentKey = keys[i];
    let currentValue = anObj[currentKey];
    if (i === 0) answer += currentKey + '=' + currentValue;
    else answer += '&' + currentKey + '=' + currentValue;
  }
  return answer;
};

// console.log(paramifyObjectKeys({}));
// var object = {f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
// console.log(paramifyObjectKeys(object));
// // ("a=1&b=2&c=3&d=4&e=5&f=6");



// Pt 7

// Mine
// function renameFiles(anArr) {
//   let counter = {};
//   let answer = [];

//   for (let i = 0; i < anArr.length; ++i) {
//     let currentElem = anArr[i];

//     if (!(counter[currentElem])) {
//       answer.push(currentElem);
//       counter[currentElem] = 1;
//     }
//     else {
//       while (answer.includes(currentElem + '(' + counter[currentElem] + ')')) {
//         counter[currentElem] = counter[currentElem] + 1;
//       }
//       answer.push(currentElem + '(' + counter[currentElem] + ')');
//       }
//     }
//   return answer;
// }


// // Theirs

// // Video
// function renameFiles(arrayOfFiles) {
//   let nameTracker = {};

//   let newArrayOfFiles = arrayOfFiles.map(function(file){
//     let extension = nameTracker[file] || 0;
//     nameTracker[file] = extension + 1;

//     if (!extension) return file;

//     let keyName = file + '(' + extension + ')';
//     while(nameTracker[keyName] || arrayOfFiles.indexOf(keyName) > -1) {
//       extension ++;
//       keyName = file + '(' + extension + ')';
//     }
//     nameTracker[keyName] = 1;
//     return keyName
//   })
//   return newArrayOfFiles;
// };

// // Github
function renameFiles(arrayOfFilenames) {

  var nameTracker = {},
  namer = function(fileName, num){ return fileName + '(' + num + ')'};

  return arrayOfFilenames.map(function(name) {
    // extension name
    var extension = nameTracker[name] || 0;
    // how many times filename is used
    nameTracker[name] = extension + 1;
    // 0 return true, if not proceed...
    if (!extension){
      return name;
    }
    // while the key exists
    var keyName = namer(name, extension);
    while (nameTracker[keyName] || arrayOfFilenames.indexOf(keyName) > -1){
      keyName = namer(name, extension++);
    }
    nameTracker[keyName] = 1;
    return keyName;
  });


}

// console.log(renameFiles(['hello', 'world', 'hello', 'hello', 'hello', 'hello', 'world', 'hi', 'world']));
console.log(renameFiles(["a(1)","a(6)","a","a","a","a","a(6)","a","a","a","a","a"]))
