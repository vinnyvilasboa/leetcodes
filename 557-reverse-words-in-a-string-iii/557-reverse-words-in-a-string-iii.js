/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let strArray = s.split(" ");
    let result = [];

    for (word of strArray) {
        let l = 0;
		let w = word.split('')
        let r = w.length - 1;
		while (l < r) {
            let temp = w[l];
            w[l] = w[r];
            w[r] = temp;
            l++;
            r--;
        }
        result.push(w.join(''));
    }

    return result.join(" ");
};