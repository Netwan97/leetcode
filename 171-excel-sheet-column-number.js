/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ans = 0;  
    var index = 1;
    for(i in s) {
        ans = (letter.lastIndexOf(s[s.length - 1 - i]) + 1) * index + ans;
        index *= 26;
    }
    return ans;
};