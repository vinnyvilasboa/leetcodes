/**
 * @param {number[]} nums
 * @return {number}
 */


let maxSubArray = (nums) => {
    //set starting point for array - ant put 0 bc there's negative numbers
  let maxSub = nums[0];
  for (let i = 1; i < nums.length; i++) {
      //let the index be the bigger number + the end of array 
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
      //update the maxSub to higher number between maxsUB and index
    maxSub = Math.max(maxSub, nums[i]);
  }
    
  return maxSub;
};