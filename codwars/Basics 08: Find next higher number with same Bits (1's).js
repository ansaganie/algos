function nextHigher(n) {
    // Brian Kernighan's bit trick
    let c = n;
    let c0 = 0, c1 = 0;

    // count trailing zeros (c0)
    while (((c & 1) === 0) && (c !== 0)) {
        c0++;
        c >>= 1;
    }
    // count ones (c1)
    while ((c & 1) === 1) {
        c1++;
        c >>= 1;
    }

    // If n == 11..1100..00, then there is no bigger number with same number of 1's
    if (c0 + c1 === 31 || c0 + c1 === 0) return -1;

    // position of rightmost non-trailing zero
    let p = c0 + c1;

    // Flip rightmost non-trailing zero
    n |= (1 << p);

    // Clear all bits to the right of p
    n &= ~((1 << p) - 1);

    // Insert (c1-1) ones on the right
    n |= (1 << (c1 - 1)) - 1;

    return n;
}

console.log(nextHigher(128)) // 256
console.log(nextHigher(1)) // 2
console.log(nextHigher(1022)) // 1279
console.log(nextHigher(127)) // 191
console.log(nextHigher(1253343)) // 1253359