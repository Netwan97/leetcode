/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length - 1;
    if(digits[len] < 9) {
        digits[len] ++;    
    } else if(digits == [9]) {
        return [1,0];
    } else {
        digits[len] = 0;
        var index = len;
        for(index; index >= 0; index--) {
            if(digits[index - 1] < 9) {
                digits[index - 1]++;
                break;
            }else {
                digits[index - 1] = 0;
            }
        }
        if(digits[0] == 0) {
            digits.unshift(1);
        }   
    }
    return digits;  
};