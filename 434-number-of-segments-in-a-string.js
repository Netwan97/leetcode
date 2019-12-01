/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.replace(/\s{2,}/g, " ").trim().split(" ");
    if(s == "") return 0;
    return s.length;
};