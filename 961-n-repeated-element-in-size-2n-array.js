/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    for(key in A) {
        if(A.indexOf(A[key]) != A.lastIndexOf(A[key])) {
            return A[key];
        }
    }
};