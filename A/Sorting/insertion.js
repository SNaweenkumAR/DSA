
function insertSort(arr){
      for(i=1;i<arr.length;i++){
        let numb=arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>numb){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1] = numb;
      }

    }

const arr = [3,9,1,8,-1,0,5]
insertSort(arr);
console.log(arr);     