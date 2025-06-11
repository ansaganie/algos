function nextHigher(n) {
    let bits = n.toString(2);
    let ones = bits.split('1').length - 1;
    let next = n + 1;

    while (true) {
        let nextBits = next.toString(2);
        if (nextBits.split('1').length - 1 === ones) {
            return next;
        }
        next++;
    }
}

console.log(nextHigher(128)) // 256
console.log(nextHigher(1)) // 2
console.log(nextHigher(1022)) // 1279
console.log(nextHigher(127)) // 191
console.log(nextHigher(1253343)) // 1253359