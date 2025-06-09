/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var arr = new Array(101).fill(0);

    for (var i = 0; i < heights.length; i++) {
        arr[heights[i]]++;
    }

    var c = 0
    var j = 0;

    for (var i = 1; i < arr.length; i++) {
        while (arr[i]-- > 0) {
            if (heights[j] !== i) {
                c++;
            }
            j++;
        }
    }

    return c;
};