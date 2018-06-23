console.log('__________________________________________');

// Mine //

function createCalculator() {
  let total = 0;
  return {
    value : function () {
      return total;
    },
    add : function (num) {
      total += num;
      // return this.value;
    },
    subtract : function (num) {
      total -= num;
      // return this.value;
    },
    clear : function () {
      total = 0;
      // return this.value;
    }
  }
};

// const calculator = createCalculator();

// console.log(createCalculator().add(2));
// console.log(calculator.value());



// Theirs //

// function createCalculator(){
// 	return {
//     total: 0,

// 		value: function(){
// 			return this.total;
//     },

// 		add: function(num){
// 			this.total += num;
//     },

// 		subtract: function(num){
// 			this.total -= num;
//     },

//     clear: function(){
//       this.total = 0;
//     }
// 	}
// }

// const calculator = createCalculator();

// calculator.add(2);
// // console.log(createCalculator().add(2));
// console.log(calculator.value());



// Mine Clean ES6

function createCalculator() {
  let total = 0;
  return {
    value : () => total,
    add : num => total += num,
    subtract : num => total -= num,
    clear : () => total = 0
  }
};
