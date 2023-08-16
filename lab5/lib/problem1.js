function getPositiveInteger() {
    while (true) {
        let str_n = prompt("Enter a positive integer");
        let n = Number(str_n);
        if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
            return n;
        }
    }
}

function showPrimes(n) {
    let primes = [];
    outerLoop: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue outerLoop;
            }
        }
        primes.push(i);
    }
    return primes;
}

function displayPrimes() {
    let n = getPositiveInteger();
    let primes = showPrimes(n);
    alert("for n = " + n + " prime numbers are " + primes.join(", "));
}

displayPrimes()