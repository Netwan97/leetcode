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