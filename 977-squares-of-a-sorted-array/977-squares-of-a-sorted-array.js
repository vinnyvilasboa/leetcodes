/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortedSquares = nums => {
    //--> Creates New sorted Array
    const sortedArray = new Array(nums.length);
    //--> 2 pointers
    let start = 0; //-- starts at 0 index
    let end = sortedArray.length - 1; //-- starts at last index
    for (let insert = end; insert >= 0; insert--) {
        
        const sqStart = Math.pow(nums[start], 2); //(base,exponent)
        const sqEnd = Math.pow(nums[end], 2);
       
        if (sqStart > sqEnd) { 
            sortedArray[insert] = sqStart;
            start++;
        } else {
            sortedArray[insert] = sqEnd;
            end--;
        }
    }
    
    return sortedArray;
};