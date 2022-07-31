/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){ 
                /*Set Mid Point*/
        let mid = Math.floor((start + end) / 2);
               /*Set mid point as index*/
        let currentGuess = nums[mid] //since the guess will be by finding the mid point
        
        /*Conditionals*/
        if(currentGuess > target){ 
            /*if mid point is more than the target, 
            we need to look on the left side.
            so we need to update the end point to the number before 
            the mid point guess and leave the start var as is.*/
            end = mid - 1;
            
        }else if(currentGuess < target){
            /*If it's smaller than target we need to look higher on the right side, 
            so we set the start variable as the number after the current guess */
            start = mid + 1;
        }else{
            /*if we get lucky and it's the first guess (mid) or
            maybe the second guess being mid point then we just return the mid point.*/
            return mid
        }
        
    }
            return -1

    
}

// search([1,2,3,4,6,7,8,9,23,44], 3)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     let start = 0;
//     let end = nums.length - 1;
//     while (start <= end) { f
//         const middle = Math.floor(((start + end) / 2));
//         const guess = nums[middle]
    
//         if (guess > target){
//             end = middle - 1
//         } else if (guess < target) {
//             start = middle + 1
//         }else {
//             return middle
//         }
        
//     }
//     return -1
    
  
// };



