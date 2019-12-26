/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var n = 0;
    while(num != 0) {
        n += num % 10;
        if(n > 9) n = 1 + n % 10
        num = Math.floor(num / 10);
    }
    return n;
};


var addDigits = function(num) {
    function turnOne (n) {
        var num = 0;
        while(n != 0) {
            num += n % 10;
            n = Math.floor(n / 10);
        }
        return num > 9 ? turnOne(num) : num;
    }
    return turnOne(num);
    //return num > 9 ? turnOne(num) : num;
};