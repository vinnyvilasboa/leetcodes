/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*BRUTE FORCE
- It works if i just return s.reverse()

*/
// var reverseString = function(s) {
//     return s.reverse()
// };

/*
- 2 points that will eventually meet in the middle through iteration
- left and right
- while left is bigger than right -> once it's equal it'll stop iteration
*/
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        let hold = s[left];
        s[left] = s[right];
        s[right] = hold;
        left++;
        right--;
    }
};