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

var fizzBuzz = function(n) {
    let result = []
    for (let i = 1; i <= n; i++){
        let str = '';
        if(i % 3 === 0){
            str += 'Fizz'
        }
        if(i % 5 === 0){
            str += 'Buzz'
        }
        if(str.length === 0){
            str += i;
        }
        result.push(str)
    }
    return result
    
};