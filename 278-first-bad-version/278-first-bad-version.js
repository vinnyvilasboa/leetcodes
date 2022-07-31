/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary ,
       let left = 1, right = n;
       while(left < right){
           let mid = Math.floor((left + right) / 2);
           if(isBadVersion(mid)){ //if isBadVersion(index) === then make mid point = right
                right = mid; // look on left side of mid
           }else{
               left = mid+1; // look on the right side of mid
           }
       }
       return left;
        //Since mid point defaults as left then by saying return left you are returning the first one(aka mid) -- we dont need anything to the right since we only need left
    };
};