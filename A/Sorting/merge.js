function Merge(arr){
   if(arr.length < 2) return arr;
     const mid = Math.floor(arr.length/2);
     const left = arr.slice(0,mid);
     const right=arr.slice(mid);

    return merger(Merge(left),Merge(right))

}

function merger(left,right){
    const sortArr = [];
    while (left.length && right.length){
        if(left[0]<=right[0])  sortArr.push(left.shift())
            else sortArr.push(right.shift())
    }
  return   [...sortArr,...left,...right]
}

const arr = [3,9,1,8,-1,0,5]
console.log(Merge(arr)); 