/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var arr = new Array(nums.length).fill(0);
    
    for (var n of nums) {
        arr[n - 1] = 1;
    }
    
    return arr.reduce((r, a, i) => { if (a !== 1) r.push(i + 1); return r; } ,[]);
};