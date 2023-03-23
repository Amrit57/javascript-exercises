const fibonacci = function (number) {

    let n1 = 0; n2 = 1; let nextTerm;
    if (number < 0) return "OOPS";
    else if (number === 0) return 0;
    else {
        for (i = 1; i <= number; i++) {
            nextTerm = n1 + n2; //0+1 = 1
            n1 = n2; // n1 = 1
            n2 = nextTerm; //n2 = 1
        }
        return n1;
    }
};
fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
