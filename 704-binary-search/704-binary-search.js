/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
-->my pseudo solution 1st attempt
//2 params in function in var search
//array of nums in ascending order
//target number
//write a function that searches the target num in the array nums. If target exists then return the "index" == loop
//otherwise == else

//loop through array, if nums index === target then return index[i] else return -1
//when done optimize it to o(log n)

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor(((left + right) / 2));
        const current = nums[middle]
        
        //if middle of the nums array is more than the target parameter
        if (current > target){
            //let right variable update to be middle - 1
            right = middle - 1
        } else if (current < target) {
            //if current is less the target then update left ?
            left = middle + 1
        }else {
            return middle
        }
        
    }
    return -1
    
  
};



