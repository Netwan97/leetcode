/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var num = 0;
    var isPrim = function (n) {
        for(var i = 2; i * i <= n; ++i) {
            if(n % i == 0) return false;
        }
        return true;
    } 
    for(var i = 2; i < n; ++i) {
        if(isPrim(i)) {
            ++num;
        }
    }
    return num;
};