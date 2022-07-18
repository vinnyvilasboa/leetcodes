/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const middle = Math.floor(((start + end) / 2));
        const guess = nums[middle]
    
        if (guess > target){
            end = middle - 1
        } else if (guess < target) {
            start = middle + 1
        }else {
            return middle
        }
        
    }
    return -1
    
  
};



