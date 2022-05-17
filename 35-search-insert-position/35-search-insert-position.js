/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //set up beginning and end for binary search 
    //set middle point to make the search process optimal
    //set conditionals to move towards start or end based on iteration
    
    let start = 0
    let end = nums.length - 1
    
    while (start<=end){
        const mid = Math.floor((start + end) / 2)
        if(nums[mid] < target) {
            start = mid + 1
            
        }else {
            end = mid - 1
        }
    }
    return start
    
};
    searchInsert([1,3,5,6], 5)