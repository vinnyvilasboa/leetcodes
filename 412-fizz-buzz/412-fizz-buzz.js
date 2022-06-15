/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function(n) {
//     let result = []
//     for (let i = 1; i <= n; i++){
//         if(i % 15 === 0){
//             result.push('FizzBuzz')
//         }else if(i % 5 === 0){
//             result.push('Buzz')
//         }else if(i % 3 === 0){
//             result.push('Fizz')
//         }else{
//             result.push(String(i)) 
//         }        
//     }
//     return result
// };

// var fizzBuzz = function(n) {
//     let result = []
//     for (let i = 1; i <= n; i++){
//         let str = '';
//         if(i % 3 === 0){
//             str += 'Fizz'
//         }
//         if(i % 5 === 0){
//             str += 'Buzz'
//         }
//         if(str.length === 0){
//             str += i;
//         }
//         result.push(str)
//     }
//     return result;
    
// };

// var fizzBuzz = function(n) {
//     let res = []
//     let map = {
//         3: 'Fizz',
//         5: 'Buzz'
//     }
    
//     for(let i = 1; i <= n; i++){
//         let str = '';
//         for(let key in map){
//             if(i % parseInt(key,10) === 0){
//                 str += map[key]
//             }
//         }
//         if(str.length === 0){
//             str += i
//         }
//         res.push(str)
//     }
//     return res
    
// };

// var fizzBuzz = function(n) {
//     return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
// };

var fizzBuzz = function(n) {
    const output = [];
    
    for (let i = 1; i <= n; i++) {
        if ( i % 15 === 0 ) {
            output.push("FizzBuzz")
        } else if ( i % 5 === 0 ) {
            output.push("Buzz")
        } else if ( i % 3 === 0 ) {
            output.push("Fizz")
        } else {
            output.push(String(i));
        }
    }
    
    return output;
};