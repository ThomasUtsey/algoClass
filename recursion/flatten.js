/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/



flatten = (arr) => {

    let flatMap = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flatMap = flatMap.concat(flatten(arr[i]))
        }else{
            flatMap.push(arr[i])
        }
       
    }
    return flatMap
  
}

console.log(flatten([1,[2],[3, [[4]]]]))