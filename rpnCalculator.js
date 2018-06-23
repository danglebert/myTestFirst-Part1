console.log('__________________________');

function RPNCalculator() {
  this.arr = [];
  this.total = 0;
};

// RPNCalculator.prototype.push = function(num) {
//   this.arr.push(num);
// }

// RPNCalculator.prototype.plus = function () {
//   if (this.arr.length < 2 && this.total === 0) throw "rpnCalculatorInstance is empty";
//   if (this.arr.length > 1) {
//   this.total = this.arr[this.arr.length - 2] + this.arr[this.arr.length - 1];
//   this.arr.pop();
//   this.arr.pop();
//   } else {
//     this.total += this.arr[0];
//     this.arr.pop();
//   }
// }

// RPNCalculator.prototype.minus = function () {
//   if (this.arr.length < 2 && this.total === 0) throw "rpnCalculatorInstance is empty";
//   if (this.arr.length > 1) {
//   this.total = this.arr[this.arr.length - 2] - this.arr[this.arr.length - 1];
//   this.arr.pop();
//   this.arr.pop();
//   } else {
//     this.total -= this.arr[0];
//     this.arr.pop();
//   }
// }

// RPNCalculator.prototype.times = function () {
//   if (this.arr.length < 2 && this.total === 0) throw "rpnCalculatorInstance is empty";
//   if (this.arr.length > 1) {
//     this.total = this.arr[this.arr.length - 2] * this.arr[this.arr.length - 1];
//   this.arr.pop();
//   this.arr.pop();
//   } else {
//     this.total *= this.arr[0];
//     this.arr.pop();
//   }
// }

// RPNCalculator.prototype.divide = function () {
//   if (this.arr.length < 2 && this.total === 0) throw "rpnCalculatorInstance is empty";
//   if (this.arr.length > 1) {
//   this.total = this.arr[this.arr.length - 2] / this.arr[this.arr.length - 1];
//   this.arr.pop();
//   this.arr.pop();
//   } else {
//     this.total /= this.arr[0];
//     this.arr.pop();
//   }
// }

// RPNCalculator.prototype.value = function () {
//   return this.total;
// }

// let rpnCalculatorInstance = new RPNCalculator;

// // console.log(typeof RPNCalculator);

// rpnCalculatorInstance.push(2);
// rpnCalculatorInstance.push(3);
// rpnCalculatorInstance.push(4);
// rpnCalculatorInstance.plus();
// console.log(rpnCalculatorInstance.value());
// console.log(rpnCalculatorInstance.arr)
// rpnCalculatorInstance.plus();
// console.log(rpnCalculatorInstance.value());
// console.log(rpnCalculatorInstance.arr)



// Theirs


function RPNCalculator() {
  this.numStack = [];
}

RPNCalculator.prototype.push = function(num) {
  this.numStack.push(num);
};

RPNCalculator.prototype.popCompute = function(operationFunc){
    if (this.numStack.length < 2) {
      throw 'rpnCalculatorInstance is empty';
    } else {
      var num1 = this.numStack.pop();
      var num2 = this.numStack.pop();

      this.push(operationFunc(num1, num2));
    }
};

RPNCalculator.prototype.plus = function() {
	this.popCompute(function(first, second){
		return first + second;
	});
};

RPNCalculator.prototype.value = function() {
  return this.numStack[this.numStack.length - 1];
};

RPNCalculator.prototype.minus = function() {
  this.popCompute(function(first, second){
  	return second - first;
  });
};

RPNCalculator.prototype.times = function() {
	this.popCompute(function(first, second){
		return first * second;
	});
};

RPNCalculator.prototype.divide = function() {
  this.popCompute(function(first, second){
  	return second / first;
  });
};
