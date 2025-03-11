function prime(n){

    if( n < 2 ) return false
  
    for( i=2;i <= Math.sqrt(n) ;i++){
         if( n%i === 0 ) {return false}  
     }
     return true;
}
console.log(prime(4));
console.log(prime(6));
console.log(prime(9));
console.log(prime(2));
