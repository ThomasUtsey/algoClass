/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

// computeFactorial = (num) =>{
//     let results = 1;

//     for(let i = 2; i<=num; i++){
//         results *= i
//     }

//     return results
// }

// console.log(computeFactorial(5))

computeFactorial = num =>{
    let result = 1

    for(let i = 2; i <= num; i++){
        result *= i
    }
    return result
}

console.log(computeFactorial(5))

computeRecFactorial = num =>{

    recur = (num) => {
        if(num <= 1){
            return 1
        }else{
            return num *= recur(num - 1)
        }

    }
    return recur(num)
}

console.log(computeRecFactorial(5))


recFactorialOne = num => num <= 1 ? 1:num * recFactorialOne(num-1)






recurFactorial = num => num === 1? 1:num * recurFactorial(num-1)
    

    
    
    
    // recur = num =>{
    //     if(num === 1){
    //        return 1
    //     }
    //     return num * recur(num-1)
    // }
    // return recur(num)


console.log(recurFactorial(5))