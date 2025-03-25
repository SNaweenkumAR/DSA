function linear(t){
    let arr=[3,4,5,6,7,10]
    for(i=0;i<arr.length;i++){
        if(arr[i] === t){
            return `index ${i} = value ${arr[i]}`;
        }
    }
    return -1
}

console.log(lin([1,2,3,4,5,6],6));


function lin(arr,t){
    for(i=0;i<arr.length;i++){
        if(arr[i] === t) return i
    }
    return -1;
}