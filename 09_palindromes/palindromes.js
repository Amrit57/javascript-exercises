const palindromes = function (string) {
    string = string.toUpperCase()
    let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()/\s+/g]/g;
    let clearString = string.replace(regex, "");
    let newString = clearString.split("").reverse().join("");
    if (clearString === newString) {
        return true;
    } else {
        return false;
    }
};
palindromes('ZZZZ car, a man, a maracaz.');
// Do not edit below this line
module.exports = palindromes;
