//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
usingWhile = (n) =>{
    let newArr = []
    while(n>0){
        newArr.push(n)
        n--
    }
    return newArr
}
console.log(usingWhile(10))
//2. Next, try looping just like above except using recursion
usingFirstRecur = (n) =>{
let newArr = []
    recur = (n) =>{
        if(n>0){
            newArr.push(n)
            recur(n-1)
        }
    }
     recur(n)
    return newArr
}

console.log(usingFirstRecur(10))

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
//Hint: a ^ b = a * a * a ... (b times
expoWhile = (a,b) =>{
    total = 1
    while(b > 0){
        total = total * a 
        b--
    }
    return total
}
console.log(expoWhile(10,5))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
recursiveExponent = (a,b) =>{
    total = 1
    recur = (a,b) =>{
    if (b > 0){
        total = total*a
        return recur(a,b - 1)
    }
    return total
}
    return recur(a,b)
}

console.log(recursiveExponent(10,5))


const arr = [5,3,5,7,9,4,6,3,6,7,8]
//5. Write a function 'recursiveMultiplihat takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.er' t
recursiveMultiplier = (arr,num) =>{
    let count = 0

    recur = (arr,num) =>{
        if(arr.length > count){
            arr[count] *= num
            count++
           return recur(arr,num)
        }else{
            return arr
        }    
    } 
    
    return recur(arr,num)
}
console.log(recursiveMultiplier(arr,5))
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
recursiveReverse = (arr) =>{
    let front = 0
    let back = arr.length - 1

    recur = (arr,front,back) =>{
        let buffer;
        if(front < back){
            buffer = arr[front]
            arr[back] = arr[front]
            arr[front] = buffer
            return recur(arr,front + 1, back - 1)
        }else{
            return arr
        }
    
    }
    return recur(arr,front,back)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // front = 0
    // back = arr.length - 1

    // recur = (arr, front, back) =>{
    //     let buffer;
    //     if(front < back){
    //         buffer = arr[front]
    //         arr[front] = arr[back]
    //         arr[back] = buffer
    
    //         return recur(arr, front + 1,back - 1)
    //     }else{
    //         return arr
    //     }
    // }
    // return recur(arr,front,back)

}
//const arr = [5,3,5,7,9,4,6,3,6,7,8]
console.log(recursiveReverse(arr,front,back))