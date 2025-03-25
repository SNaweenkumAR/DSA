// function fibunacci(n){
//     if(n <= 1) return n;  
//     let num1 = [0, 1];
//     let fib;    

//     for(let i = 2; i < n; i++){  
//         fib = num1[i - 1] + num1[i - 2];   
//         num1.push(fib);
//     }

//     return num1[n - 1];
// }

// console.log(fibunacci(6)); 
// console.log(fibunacci(8)); 

function fibonacci(n) {
    let num1 = [0, 1];  
    for (let i = 2; i < n; i++) {                //O(n)
        num1.push(num1[i - 1] + num1[i - 2]); 
    }
   return num1.slice(0,n);  
}

// console.log(fibonacci(7));

//Recursion

function recfibo(n){
    let num=[1,2];
    if( n < 2){
        return n
    }
    return  num = recfibo(n-1) + recfibo(n-2);    
}

console.log(fibonacci(7));