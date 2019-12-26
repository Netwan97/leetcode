/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    function sum(arr, n) {
        var sum = 0;
        for(var j = n; j < arr.length; ++j) {
            sum += arr[j];
        }
        return sum;
    }
    var s = sum(nums, 0);
    for(var i = 0; i < nums.length; ++i){
        var left = sum(nums, i + 1);
        if(s - nums[i] - left == left) return i;
    }
    return -1;
};