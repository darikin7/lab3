// Завдання 1
function raandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(raandom(3, 5));
console.log(raandom(1, 10));
console.log(raandom(2, 4));
console.log(raandom(1, 2));
console.log(raandom(6, 8));

// Завдання 2
function isPrime(num) {
    if(num <= 1)
        return false;
    for(let i = 2; i * i <= num; ++i)
        if(num % i == 0)
            return false;
    return true;
}
console.log(isPrime(17));
console.log(isPrime(15));

// Завдання 3
function recursiveSum(n) {
    if(n === 0)
        return 0;
    if(n > 0)
        return n + recursiveSum(n - 1);
    if (n < 0)
        return n + recursiveSum(n + 1);
}

console.log(recursiveSum(5));
console.log(recursiveSum(-3));
