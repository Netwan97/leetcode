/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr_target = [];
    for(var i = 0; i < nums.length - 1; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                arr_target.push(i);
                arr_target.push(j);
                break;
            }
        }
    }
    return arr_target;
};