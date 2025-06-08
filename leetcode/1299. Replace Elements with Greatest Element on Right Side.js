/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var g = -1;
    
    for (var i = arr.length-1; i >=0; i--) {
        var t = arr[i] > g ? arr[i] : g;
        arr[i] = g;
        g = t;
    }

    return arr;
};