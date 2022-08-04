/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*

*/

var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1 
    let result = []
    
    while(left < right){
        let leftElement = nums[left];
        let rightElement = nums[right];
        
        if(leftElement + rightElement === target){
            result.push(left + 1);
            result.push(right + 1);
            break;
        }else if(leftElement + rightElement > target){
            right--;
            
        }else{
            left++;
        }
    }
    return result;
};