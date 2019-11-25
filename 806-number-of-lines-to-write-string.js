/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var sum = 0;
    for(i in S) {
        var num = widths[S.charCodeAt(i) - 'a'.charCodeAt(0)];
        if(num + sum % 100 > 100){
            sum = Math.ceil(sum / 100) * 100;
        }
        sum += num;
    }
    return [Math.ceil(sum/100), sum % 100];
};