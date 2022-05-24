/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//when 2 numbers in an array need to be compared, running 2 loops is ideal 

var twoSum = function(nums, target) {
    //for loop starting at 0
    //for loop at 1
    //if i + j = target return i & j 
    for (let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            let sum = nums[i] + nums[j]
            if(sum === target){
                return[i,j]
            }
        }
    }
    
    
}