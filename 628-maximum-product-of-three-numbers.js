/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function (n1, n2) {
        return n2 - n1;
    });
    return nums[0] * Math.max(nums[1] * nums[2], nums[nums.length - 1] * nums[nums.length - 2]);
};