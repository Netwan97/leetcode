/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var len = s.length;
    function isFactor (i, n) {
        if(n % i == 0) return true;
        return false;
    }
    for(var i = 1; i < len; ++i) {
        if(isFactor(i, len)) {
            var rep = len / i;
            var str1 = s.slice(0, i), str = "";
            for(var j = 0; j < rep; ++j) {
                str += str1;
            }
            if(str == s) return true;
        } else {
            continue;
        }
    }
    return false;
};