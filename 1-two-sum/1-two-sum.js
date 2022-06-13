/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

how many solutions are possible?
can i use the same element twice?
what order done does the answer need to be in?

-> Curve balls: 
*/

/*BRUTE FORCE
loop 1 -> i = 0 
loop 2 -> j = i + 1 
if loop1 + loop2 === target 
return [loop1, loop2]
*/


let twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};