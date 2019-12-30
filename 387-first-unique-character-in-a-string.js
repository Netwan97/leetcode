/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr = [];
    for(i in s) {
        if(arr[s[i]] === false) {
            continue;
        } else if(arr[s[i]] != undefined && arr[s[i]] != i) {
            arr[s[i]] = false;
            continue;
        }
        arr[s[i]] = i;
    }
    for(k in arr) {
        if(arr[k] !== false) return arr[k];
    }
    return -1;
};