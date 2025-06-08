/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// var duplicateZeros = function(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (res.length < arr.length) {
//             if (arr[i] === 0) res.push(0, 0);
//             else res.push(arr[i]);
//         }

//         arr[i] = res[i];
//     }
// };

var duplicateZeros = function(arr) {
    let d = 0;
    let hasLastZero = false;

    for (let i = 0; i < arr.length; i++) {
        if (d + i + 1 >= arr.length) {
            hasLastZero = arr[i] === 0;
            break;
        }
        if (arr[i] === 0) d++;
    }
console.log(hasLastZero)
    let r = arr.length - 1;
    let l = r - d;

    while (r >= 0) {
        if (arr[l] === 0 && !hasLastZero) {
            arr[r] = 0;
            arr[r - 1] = 0;
            r -= 2
        } else {
            hasLastZero = false;
            arr[r] = arr[l];
            r--;
        }

        l--;
    }
};