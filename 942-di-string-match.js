/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var height = 0;
    var pst = [0];
    for(i in S) {
        if(S[i] == "I") {
            height += 1;
        } else if(S[i] == "D") {
            height += -1;
        }
        pst.push(height);
    }
    var match = function (N, arr, height) {
        for(i in arr) {
            if(arr[i] == height) {
                arr[i] = N;
                --N;
            }
            if(N < 0) {
                return arr;
            }   
        }
        if(N >= 0)  return match(N, arr, --height);  
    };
    return match(S.length, pst, Math.max(...pst));
};