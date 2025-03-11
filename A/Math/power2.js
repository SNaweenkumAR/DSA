function power2(n) {
    if (n < 1) return false; 

    while (n % 2 === 0) {
        n = n / 2;
    }

    return n === 1; 
}

console.log(power2(3)); 
console.log(power2(8));
console.log(power2(16)); 
console.log(power2(10)); 
console.log(power2(1)); 
