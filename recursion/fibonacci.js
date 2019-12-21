/*

Write a function that outputs the nth Fibonnaci number. A number in this 
sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your 
solution? (Hint: look up dynamic programming)
*/
// num 8th sequence
// 1st 0 + 1 = 1
// 2nd 0 + 1 = 1
// 3rd 1 + 1 = 2
// 4th 1 + 2 = 3
// 5th 2 + 3 = 5
// 6th 3 + 5 = 8
// 7th 5 + 8 = 13





recurFib = (num) =>{
    let first = 0
    let second = 1
    let count = 1
    let buffer;
    if(num <= 0) return 0

    recur = (num) =>{
        if(count === num){
            return second
        }else{
            buffer = second
            second += first
            first = buffer
            count++
            return recur(num)
        }

    }
    return recur(num)
}


console.log(recurFib(0))