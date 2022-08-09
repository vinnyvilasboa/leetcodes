/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
    for (let word = 0; word < s.length; word++) {
        s[word] = reverse(s[word])
    } 
    return s.join(' ')
};

function reverse(word) {
    word = word.split('')
	
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
        const temp = word[left]
        word[left] = word[right]
        word[right] = temp
    }
    return word.join('')
}