function binary (t){
    let arr=[3,10,1,8,7,10]
     
   arr.sort((a,b) => a-b);    

    for(i=0;i<arr.length;i++){
        if(arr[i] === t){
            return `index ${i} = value ${arr[i]}`;
        }
    }
    return -1
}

// console.log(linear(6));
// console.log(linear(10));


function binary1(arr, t) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (t === arr[mid]) { // ✅ Corrected comparison
            return mid; // ✅ Return the index of found element
        }

        if (t < arr[mid]) {
            right = mid - 1;
        } else { // ✅ Using else instead of extra if
            left = mid + 1;
        }
    }
    return -1; // ✅ Return -1 if element is not found
}

console.log(binary1([-5, 2, 3, 4, 6], 6));  // Output: 4 (index of 6)
console.log(binary1([-5, 2, 3, 4, 6], 10)); // Output: -1 (not found)
console.log(bi([-5, 2, 3, 4, 6], 6)); // Output: 0 (index of -5)



function bi(arr,t){
      let left=0;
      let right=arr.length-1;
    
      while(left <= right){
        let mid=Math.floor((left+right)/2);
              if(t === arr[mid]){ return `We can the find the num ${mid}:${arr[mid]}`};

              if( t <arr[mid] ) { right=mid-1}
              else { left=mid+1};
      }
      return -1;

}