/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(i in s) {
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return i;
            
        }
    }
    return -1;
};