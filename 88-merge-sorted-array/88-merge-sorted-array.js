/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    
    for (let i = m + n - 1; i >= 0; i--){
        if (second < 0){
            break
        }
        //if last nums1 is more than last nums2
        if (nums1[first] > nums2[second]){
        //update nums1 index to nums1 last num
            nums1[i] = nums1[first];
            first--

        }else {
            //since everything is still going into the first array then we loop through the second one still
            nums1[i] = nums2[second];
            second--
        }
    }
    
};


/*
nums1 = [1,2,3,0,0,0]
m = 3
nums2=[2,5,6]
n = 3
*/