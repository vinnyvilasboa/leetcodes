/**
 * @param {number[]} nums
 * @return {number}
 */
/*
- Non empty array of int
- Double nums besides 1 
- find that single num
++++++++
- Input is [2,2,1]
- Output is the actual num
- TC: O(N) // SC: O(1)
+++++++++BRUTE FORCE
- for loop i < nums.length 
- for loop j < nums.length + 1
- if nums[i] === nums[j] return "not a single num"
- else return i
*/
var singleNumber = function(nums) {
    let set = new Set()
    for (let num of nums){
        if(set.has(num)){
            set.delete(num)
        }else {
            set.add(num)
        }
        
    }
    return Array.from(set)[0]
};