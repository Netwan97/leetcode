/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var letter =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var ans = "";
    while (n > 0) {
        ans = letter[(n-1) % 26] + ans;
        n = Math.floor((n-1) / 26);
    }
    return ans;
};