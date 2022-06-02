/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    res = []
    for(i of nums2) {
        if(nums1.includes(i)){
            res.push(i)
            nums1[nums1.indexOf(i)] = ""
        }
    }
    return res
};


/*
 [1,2,2,1][2,2]
*/