const reverseString = function (word) {
    if(word =="") {
        return word;
    }
    else{

        let splitWord = word.split('');
        let reverseWord = splitWord.reverse();
        let joinWord = reverseWord.join("");
        console.log(joinWord)
        return joinWord;
    }

};
reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
