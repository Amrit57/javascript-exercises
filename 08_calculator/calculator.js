const add = function(num1, num2) {
	return num1+num2;
};
add(2,6);
const subtract = function(num1, num2) {
	return num1-num2;
};
subtract(10,4);

const sum = function([...args]) {
   let sums=0;
    for(i = 0; i< args.length; i++){
      sums += args[i]
    }
    console.log(sums);
 return sums;
};
sum([1,3,5,7,9]);

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
