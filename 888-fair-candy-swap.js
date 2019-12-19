/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    function sum(arr) {
        return arr.reduce(function(a, b) {
            return a + b;
        }, 0)
    }
    var sumA = sum(A);
    var sumB = sum(B);
    var TFarr = [];
    for(var b of B) {
        TFarr[b] = true;
    }
    for(var a of A) {
        if ((2 * a + sumB - sumA) % 2 == 0) {
            var b = Math.round((2 * a + sumB - sumA)) / 2;
            if(TFarr[b] == true) {
                return [a, b];
            }  
        }
    }  
};