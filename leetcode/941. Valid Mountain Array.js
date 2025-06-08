/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var validMountainArray = function(arr) {
//     if (arr.length < 3) return false;
//     var c = null;
//     var p = null;

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i - 1] === arr[i]) return false;
//         if (arr[i - 1] > arr[i] && c === null) return false
//         if (arr[i - 1] > arr[i]) {
//             p = 'u';
//             c = 'd';
//         }
//         if (arr[i - 1] < arr[i] && p !== null) return false;
//         if (arr[i - 1] < arr[i]) c = 'u';
//     }

//     return c === 'd' && p === 'u';
// };

var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    var i = 0;

    while (i + 1 < arr.length && arr[i] < arr[i + 1]) i++;
    if (i === 0 || i === arr.length - 1) return false;
    while (i + 1 < arr.length && arr[i] > arr[i + 1]) i++;
    return i === arr.length - 1
};