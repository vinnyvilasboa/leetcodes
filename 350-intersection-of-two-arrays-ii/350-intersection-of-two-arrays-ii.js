/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //map 
    let obj = {}
    //where the new array is gonna go
    let result = []
    
    //for..of.. loop creates a loop over iterable objects
    for (let i of nums1){
        //if there is nothing inside the object
        if(!obj[i]){
            //let index = 1
            obj[i] = 1
        } else {
            //else loop through them 
            obj[i]++
        }
    }

    for (let i of nums2){
        //if index is more than 0
        if (obj[i] > 0){
            //push the index inside result vairable
            result.push(i)
            obj[i]--
        }
    }
    return(result)
}


/*
 [1,2,2,1][2,2]
*/