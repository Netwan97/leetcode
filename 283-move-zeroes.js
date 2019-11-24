/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var len = nums.length, pst = key = 0;
    for (var i = 0; i < len - 1;) {
        if (nums[i] == 0) {
            var j = i + 1;
            for (; j < len; j = j + 1) {
                if (nums[j] != 0) {
                    var change = nums[j];
                    nums[j] = nums[i];
                    nums[i] = change;
                    i = j;
                } else if (key == 0) {
                    key++;
                    pst = j;
                }
                if (j == len - 1) {
                    if (key) {
                        --len;
                        i = j = pst;
                        key = 0;
                    } else {
                        return false;
                    }
                }
            }
        } else {
            ++i;
            continue;
        }
    }
    return nums;
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var len = nums.length - 1;
    for (var i = 0; i < len; ++i) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            --i;
            --len;
        }
    }
};
