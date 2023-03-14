/*create a function which takes 2 integer and
// returns the sum of every num between sumAll(1, 4) 
returns the sum of 1 + 2 + 3 + 4 which is 10.*/
// function should add from 1 to 4, min to max value passed  in an args.
const sumAll = function (min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)){
        console.log("ERROR")
        return ("ERROR");
    }
    if(min<0 || max < 0){
        return "ERROR";
    }
    if(min>max){
        const greater = min;
        min = max;
        max = greater;
    }
    let sum=0;
    for(i=min; i<=max; i++){
        
        sum = sum + i;
        /* sum =1
        i++ = 2;
        sum = 1+2=3
        i++ = 3;
        sum = 3+3=6
        i++  = 4;
     ( i=4, i < 5).max = 4, (4+1) = 5; condition true!
        sum = 6+4 = 10;*/
    }
    console.log(sum);
    return sum;

}
sumAll(123,1);



// Do not edit below this line
module.exports = sumAll;








