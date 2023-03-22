const add = function(num1, num2) {
	return num1+num2;
};
add(2,6);
const subtract = function(num1, num2) {
	return num1-num2;
};
subtract(10,4);

const sum = function (args) {
  let sums=0;
    for(i = 0; i< args.length; i++){
      sums += args[i]
    }
 return sums;
};
sum([7,11]);

const multiply = function(args) {
  let multi=1;
  for(i = 0; i< args.length; i++){
    multi*= args[i]
  }
  return multi;
};
multiply([2,4,6,8,10,12,14]);

const power = function(num, power) {
  let total = Math.pow(num,power);
  return total;
};
power(4,3);

const factorial = function(num) {
  let fac = 1;
if(num === 0 || num === 1){
  return fac;
}else if (num>0){
  for(i=num; i>=1; i--){
    fac = fac * i;
  } 
  return fac;
}
};
factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
