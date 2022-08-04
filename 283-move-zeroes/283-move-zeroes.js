/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//int arr = nums
//move all 0's to the end of the array 
//maintain relative order of non zero elements
//no new array

//set start=0 & end= nums.length - 1 points
//while start < end 
//set middle = start + end / 2 rounded down
//
//if (nums[mid] === 0) {end = nums[mid]}


var moveZeroes = function(nums) {
    let anchor = 0;
    
    for(let explorer = 0; explorer < nums.length; explorer++){
        if (nums[explorer] !== 0){
            let temp = nums[anchor];
            nums[anchor] = nums[explorer];
            nums[explorer] = temp
            
            anchor++;
        }
    }
};