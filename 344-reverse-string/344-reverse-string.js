/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
//input is s array [h,e, l, l ,o]
//2 points start and end
    let start = 0
    let end = s.length - 1;
    while(start < end){
        //make a placeholder to hold moving numbers -> start at s[0]
        let firstIndex = s[start];
        s[start] = s[end] //as it iterates it moves to end of array
        s[end] = firstIndex //swaps place with s[0]
        //iterate both points until loop conditional is met
        start++;
        end--;
    }
};