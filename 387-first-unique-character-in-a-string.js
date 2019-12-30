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

var firstUniqChar = function(s) {
    for(var i = 0; i < s.length; ++i) {
        var key = "true";
        for(var j = 0; j < s.length; ++j) {
            if(j != i && s[j] == s[i]) {
                key = "false";
                break;
            }
        }
        if(key === "true") return i;
    }
    return -1;
};