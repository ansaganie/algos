//1346. Check If N and Its Double Exist

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    var h = new Set();

    for (var i = 0; i < arr.length; i++) {
        var m = arr[i] * 2;
        var d = arr[i] / 2;
        if (h.has(d) || h.has(m)) return true;
        h.add(arr[i]);
    }

    return false;
};

checkIfExist([10, 2, 5, 3]); // Output: true, because 2 * 5 = 10
checkIfExist([7, 1, 14, 11]); // Output: true, because 2 * 7 = 14
checkIfExist([3, 1, 7, 11]); // Output: false, because there is no such pair