/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// [-1,0,3,5,9,12]
// 9
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let guess = nums[mid];
        
        if(guess > target){//move left
            right = mid - 1;
        }else if(guess < target){//move right
            left = mid + 1;
        }else{
            return mid //if mid === target
        }
    }
    return -1;
}
