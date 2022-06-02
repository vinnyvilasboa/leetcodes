/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let obj = {}
    let result = []
    
    for (let i of nums1){
        if(!obj[i]){
            obj[i] = 1
        
        } else {
            obj[i]++
        }
    }
    console.log(obj)

    for (let i of nums2){
        if (obj[i] > 0){
            result.push(i)
            obj[i]--
        }
    }
    return(result)
}


/*
 [1,2,2,1][2,2]
*/