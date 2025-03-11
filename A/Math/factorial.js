
function factorial(n){
let fact = 1 ;
   
for( i=n; i>0; i--){  //O(n)
    fact *= i;
 
}
      return fact;
}

// console.log(factorial(5));
// console.log(factorial(4));

function recfac(n){
     if( n <= 1) return n
      return n * recfac(n-1)
}
console.log(recur(6));

function recur(n){
      if(n<= 1) return n;
      return n * recur(n-1);
}


