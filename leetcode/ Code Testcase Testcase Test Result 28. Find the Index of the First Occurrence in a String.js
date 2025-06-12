/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };


var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] === needle[0]) {
            let k = i;
            let f = true;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[k] !== needle[j]) {
                    f = false;
                    break;
                }
                k++;
            }

            if (f) return i;
        }
    }

    return -1;
};