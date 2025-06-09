/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function(nums) {
//     var copy = Array.from(new Set(nums)).sort((a, b) => b - a);
//     var i = copy.length >= 3 ? 2 : 0;
    
//     return copy[i];
// };

var thirdMax = function(nums) {
    var first = null;
    var second = null;
    var third = null;

    for (var n of nums) {
        if (n === first || n === second || n === third) continue;

        if (first === null || n > first) {
            third = second;
            second = first;
            first = n;
        } else if (second === null || n > second) {
            third = second;
            second = n;
        } else if (third === null || n > third) {
            third = n;
        }
    }

    if (third === null) return first;
    return third;
};