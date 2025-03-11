function linear(t){
    let arr=[3,4,5,6,7,10]
    for(i=0;i<arr.length;i++){
        if(arr[i] === t){
            return `index ${i} = value ${arr[i]}`;
        }
    }
    return -1
}

console.log(linear(6));
console.log(linear(10));
console.log(linear(11));

