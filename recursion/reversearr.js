

reverseArr = (arr) =>{
let front = 0
let back = arr.length - 1

    recur = (arr,front,back) => {
        let buffer;
        if(front < back){
            buffer = arr[front]
            arr[front] = arr[back]
            arr[back] = buffer
            return recur(arr,front + 1, back - 1)
        }else{
            return arr
        }
    }
    return (recur(arr,front,back))
}
const arr = [1,2,3,4,5,6,7,8,9]
console.log(reverseArr(arr))