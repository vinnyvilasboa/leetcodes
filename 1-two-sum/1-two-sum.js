/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//--> O(N^2)
// var twoSum = function(nums, target) {
//     //for loop starting at 0
//     //for loop at 1
//     //if i + j = target return i & j 
//     for (let i=0; i < nums.length; i++){
//         for(let j=i+1; j < nums.length; j++){
//             let sum = nums[i] + nums[j]
//             if(sum === target){
//                 return[i,j]
//             }
//         }
//     }
    
    
// }
// [1,2,3,6,11], 5
// target - nums[i] 
//


let twoSum = (nums, target) => {
//
    let memory ={}
    for (let i = 0; i < nums.length; i++){
        //-- if the position doesn't exist 
        if(memory[nums[i]] === undefined){
            //--subtract target by nums and equals index
            memory[target-nums[i]] = i
        }else{
            return [i, memory[nums[i]]]
        }
    }
 
    
}