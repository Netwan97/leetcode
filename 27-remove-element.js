/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    for(var key = 0; key < len; key++) {
        if(nums[key] == val) {
            for(;len > key; len--) {
                if(nums[len - 1] != val) {
                    var item = nums[key];
                    nums[key] = nums[len - 1];
                    nums[len - 1] = item;
                    break;
                }
            }
        }
    }
    return nums.length = len;
};