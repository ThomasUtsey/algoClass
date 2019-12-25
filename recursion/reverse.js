/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/
rever = str => {
    str = str.split('')
    let front = 0
    let back = str.length - 1
    let buffer;
    

    recur = (str,front,back) =>{
    
        if (front < back){
            buffer = str[front]
            str[front] = str[back]
            str[back] = buffer
           return recur(str,front + 1,back - 1)
        } else {
            return str.join('')
        }
        
    }
    return recur(str,front,back)
}
console.log(rever('test'))