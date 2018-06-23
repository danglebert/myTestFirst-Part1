console.log('___________________')


// Pt 1
function concatString(...args) {
  let result = '';
  for (let i = 0; i < args.length; ++i) {
    result += args[i];
  }
  return result;
}



// Pt 2 line 24

function yourFunctionRunner(...args) {
  let str = '';
  for (let i = 0; i < args.length; ++i) {
    let currentElem = args[i];
    str += currentElem();
  }
  return str;
};


// Pt 3 line 52

function makeAdder (anArg) {
  return function (otherArg) {
    return anArg + otherArg;
  }
}


// Pt 4 line 66

let once = function(callBack) {
  let toggle = false;
  return function (){
    if (toggle === false) {
      callBack();
      toggle = true;
    }
  };
};



// Pt 5 line 91

function createObjectWithClosures(){
  let total = 0;
  return {
    oneIncrementer : function(num) {
      total += 1;
    },
    tensIncrementer : function(num) {
      total += 10;
    },
    getValue : function () {
      return total;
    },
    setValue : function(num) {
      total = num;
    }
  };

};


// Pt 6 line 135

// // With let
// function guestListFns(guests, secret) {
//   var answer = [];

//   for (var i = 0; i < guests.length; ++i) {
//     let currentGuest = guests[i];
//     answer.push(function(code) {
//       if (code === secret) return currentGuest;
//       else return 'Secret-Code: Invalid';
//     })
//   }
//   return answer;
// }

function guestListFns(guests, secret) {
  var answer = [];

  function guestLogger(guest) {
    return function (code) {
      if (secret === code) return guest;
      else return 'Secret-Code: Invalid';
    }
  }
  for (var i = 0; i < guests.length; ++i) {
    answer.push(guestLogger(guests[i]));
    }
  return answer;
}

guestsArray = ['James', 'Casey', 'Karen', 'Gene', 'Michele', 'Ashi'],
secretCode = 404;

guestNameFunctions = guestListFns(guestsArray, secretCode);

// console.log(guestNameFunctions);



// Pt 7 line 198

function generateGuestList (funcArray, secondCode) {
  var answer = [];

  for (var i = 0; i < funcArray.length; ++i) {
    answer.push(funcArray[i](secondCode));
  }
  return answer;
}

var officialGuestList = generateGuestList(guestNameFunctions, secretCode);

console.log(officialGuestList);
