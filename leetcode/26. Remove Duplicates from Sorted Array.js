/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var length = 1;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[length++] = nums[i];
        }
    }

    return length;
};

removeDuplicates([1, 1, 2]); // Output: 2, nums = [1, 2]
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // Output: 5, nums = [0, 1, 2, 3, 4]
removeDuplicates([1, 2, 3, 4, 5]); // Output: 5, nums = [1, 2, 3, 4, 5]
removeDuplicates([]); // Output: 0, nums = []