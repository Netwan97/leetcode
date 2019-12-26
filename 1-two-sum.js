/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 两遍遍历
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; ++i) {
        var pos = nums.lastIndexOf(target - nums[i]);
        if(pos != -1 && pos != i)
        return [i, pos];
    }
    return false;
};

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; ++i) {
        for(var j = 0; j < nums.length; ++j) {
            if(nums[j] == target - nums[i] && i != j) return [i, j];
        }
    }
    return false;
};



// 一遍遍历
var twoSum = function(nums, target) {
    var copy = [];
    for(i in nums) {  
        var key = target - nums[i];
        if(copy[key] !== undefined) return [i, copy[key]];
        copy[nums[i]] = i;
    }
    return false;
};