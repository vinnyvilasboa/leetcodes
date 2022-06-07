/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //hash table created
    let hash = {};
    //loop through nums
    for(let i = 0; i < nums.length; i++){
        //new variable to hold nums index
       let aNum = nums[i]
       //if nums index is inside return true
       if(hash[aNum]){
           return true 
       }else{
           //if it's not push it inside
           hash[aNum] = true
       }
    }
    //if none match return false
    return false
}

