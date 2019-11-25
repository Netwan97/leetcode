/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    var add = function(A, i, k) {
        while(i >= 0) {
            if(i > 0) {
                if(A[i] + k % 10 <= 9) {
                    A[i] += k % 10;
                } else {
                    A[i] = (A[i] + k % 10) % 10;
                    A[i - 1] += 1;
                }
               
            } else if (i == 0) {
                if(A[i] + k % 10 <= 9) {
                    A[i] += k % 10;
                } else {
                    A[i] = (A[i] + k % 10) % 10;
                    if(k != 0){
                        k += 10;
                    } else{
                        A.unshift(1);
                    }
                    
                }   
            }
            k = Math.floor(k / 10);
            --i;
        }
        while(k != 0) {
            A.unshift(k % 10);
            k = Math.floor(k / 10);
        }
        return A;
    }
    return add(A, A.length - 1, K);
};