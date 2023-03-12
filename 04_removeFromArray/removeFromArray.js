const removeFromArray = function(array, ...args) {
   let newArray = [];

   array.forEach((item)=> {

      if(!args.includes(item))

      newArray.push(item);
   })
return newArray;

}
console.log(removeFromArray(["hey",2,3,"ho"], 2, "hey"));
// Do not edit below this line
module.exports = removeFromArray;
