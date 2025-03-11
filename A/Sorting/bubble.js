// arr=[1,5,3,0,7,9,6]

// arr.sort((a,b) => b-a);

// console.log(arr);

function arrSort(arrey){
    let swap;
    do{
        swap=false;
    for(i=0;i<arrey.length-1;i++){
        if(arrey[i] > arrey[i+1]){
            let temp = arrey[i]
            arrey[i]=arrey[i+1]
            arrey[i+1]=temp;
            swap=true;
        }
    }
}
while(swap)     

}

const arrey = [3,9,1,8,2,0,5]
arrSort(arrey);
console.log(arrey);     