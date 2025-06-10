/**
 * @param {number[]} nums
 * @return {number[]}
 */

// var findDisappearedNumbers = function(nums) {
//     var arr = new Array(nums.length).fill(0);
    
//     for (var n of nums) {
//         arr[n - 1] = 1;
//     }
    
//     return arr.reduce((r, a, i) => { if (a !== 1) r.push(i + 1); return r; } ,[]);
// };

var findDisappearedNumbers = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];
        if (n < 0) continue;
        while (n > 0) {
            var next = nums[n - 1];
            nums[n - 1] = -n;
            n = next;
        }
    }

    var c = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            nums[c++] = i + 1;
        }
    }

    nums.length = c;

    return nums;
};