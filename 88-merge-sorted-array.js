/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(var i = m, j = 0; i < nums1.length && j <= n; ++i, ++j) {
        nums1[i] = nums2[j];
    }
    return nums1.sort(function(n1, n2) {
        return n1 - n2;
    });
   
};