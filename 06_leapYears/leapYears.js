const leapYears = function(year) {
   
if( year%100 !==0 && year%4==0 || year % 400 == 0) {
    console.log("yes")

    return true
}else {
    console.log('no')
    return false;
}
};
leapYears(34992)


// Do not edit below this line
module.exports = leapYears;
