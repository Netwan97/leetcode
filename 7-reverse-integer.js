/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0;
    while(x != 0) {
        var pop = x % 10;
        rev = rev * 10 + pop;
        //console.log("rev", rev);
        x = (x > 0) ? Math.floor(x / 10) : Math.ceil(x / 10);
        //console.log("x", x);
    }
    if(rev < -Math.pow(2, 31) -1 || rev > Math.pow(2, 31) - 1) {
        return 0;
    }
    return rev;
};