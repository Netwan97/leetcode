/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr = [];
    for(i in nums1) {
        for(var j = 0; j < nums2.length; ++j) {
            if(nums1[i] == nums2[j]) {
                arr.push(nums1[i]);
                nums2.splice(j, 1);
                break;
            }
        }
    }
    return arr;
};