function Quick(arr){
    if(arr.length < 2) return arr;
let pivot=arr[arr.length-1];
  let left=[];
  let right=[];
  for(i=0;i<arr.length-1;i++){
     if(arr[i]<pivot) left.push(arr[i])
     if(arr[i]>pivot) right.push(arr[i])
  }
return [...Quick(left) , pivot,...Quick(right)];
}

const arr = [3,9,1,8,-1,0,5]
console.log(Quick(arr)); 




// function dup(a){
//   if(a.length < 2) return a;
//   let pivot = a[a.length-1];
//   let left=[];
//   let right=[];
//  for(i=0;i<a.length-1;i++){
//   if(a[i]<pivot)left.push(a[i]);
//   if(a[i]>pivot)right.push(a[i]);
//  }
// return [...dup(left),pivot,...dup(right)];
// }

// const ar = [3,9,1,8,-1,0,5]
// console.log(dup(ar)); 