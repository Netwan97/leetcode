/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var len = s.length;
    var revs = "";
    function reversee (str, i ,j) {
        var ss = str.slice(i, j).split("").reverse();
        revs += ss + str.slice(j, j + k);
        i += 2 * k;
        j = Math.min(len, i + k );
        if(i < len ){
            reversee(str, i , j);
        } else {
            return revs;
        }
    }
    reversee(s, 0, k);
    return revs.replace(/\,/g, "");
};