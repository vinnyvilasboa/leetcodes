/**
 * @param {number[]} nums
 * @return {boolean}
 */
//new Set -> set can't have duplicate values
//compare size of array with size of new set 
var containsDuplicate = function(nums) {
    let newSet = new Set(nums)
    if(nums.length !== newSet.size){
        return true
    }else return false
    
};
containsDuplicate([1,2,3,1])