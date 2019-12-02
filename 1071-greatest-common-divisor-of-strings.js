/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    var min = Math.min(str1.length,str2.length);
    for(var i = min; i >= 0; --i) {
        if(str1.length % i == 0 && str2.length % i == 0) {
            var X1 = str1.slice(0, i);
            var X2 = str2.slice(0, i);
            if(X1 == X2) {
                for (var j = 1; j < Math.floor(str1.length / i); ++j) {
                    X1 += str1.slice(0, i);
                }
                for (var j = 1; j < Math.floor(str2.length / i); ++j) {
                    X2 += str2.slice(0, i);
                }
                if( X1 == str1 && X2 == str2) return str1.slice(0, i);
            }

        }
    }
    return "";
};