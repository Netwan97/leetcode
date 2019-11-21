/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    return J.split("").map(function(a) {
        var count = index = 0;
        if(S.indexOf(a, index) != -1) {
            while(S.indexOf(a,index) != S.lastIndexOf(a)) {
            count++;
            index = S.indexOf(a, index) + 1;
            }
            count++;
            return count;
        }
        return count;
    }).reduce(function(a,b) {
        return a + b;
    }, 0)
};