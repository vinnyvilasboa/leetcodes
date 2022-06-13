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

TC: O(N^2) SC: 0(1)
*/
// let twoSum = (nums, target) => {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// };


/*HashMap
- create hash map
- Traverse the array
- set var value to equals the index
- set a new variable to equals target minus the value
- set conditional if map[newVar] !== undefined since conditionals return bool false by default
- ^ if the that number is inside the map return the number
- else add that index "value" in the map
TC: O(N) SC: 0(N)
*/

let twoSum = (nums, target) => {
    let map = {};
    for (let i = 0; i < nums.length; i++){
        let value = nums[i]
        let addedValue = target - value;
        if(map[addedValue] !== undefined){
            return [map[addedValue],i]
        }else {
            map[value] = i
        }
    }
}