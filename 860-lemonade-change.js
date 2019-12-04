/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var five = ten = 0;
    for(i in bills) {
        if(bills[i] == 5) {
             ++five;
        } else if(bills[i] == 10) {
            if (five == 0) return false;
            ++ten;
            --five;
        } else {
            if(ten > 0 && five > 0) {
                --ten;
                --five;
            } else if (five >= 3){
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};