const repeatString = function(text,num) {
let string = ''
if (num<0){
    return string = 'ERROR';
} else{
    for(i=0;i<num;i++){
        string += text;
   }
}

return string;
};
console.log(repeatString("",10));


// Do not edit below this line
module.exports = repeatString;
