/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortedSquares = nums => {
    //--> Creates New Array
    const sorted = new Array(nums.length);
    
    //--> 2 pointers
    let start = 0; //-- starts at 0 index
    let end = sorted.length - 1; //-- starts at last index
    
    
    for (let insert = end; insert >= 0; insert--) {
    //--> the below variable are holding each iteration to the second power
        const squaredStart = Math.pow(nums[start], 2);
        const squaredEnd = Math.pow(nums[end], 2);
       
        if (squaredStart > squaredEnd) {
            sorted[insert] = squaredStart;
            start++;
        } else {
            sorted[insert] = squaredEnd;
            end--;
        }
    }
    
    return sorted;
};