/**
 * @param {string} s
 * @return {number}
 */

const dict = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};
var romanToInt = function(s) {
    var res = 0;

    for (var i = 0; i < s.length; i++) {
        var c = s[i]
        var n = s[i + 1];

        if (n && dict[c] < dict[n]) {
            res = res + dict[n] - dict[c];
            i++;
        } else {
            res += dict[c];
        }
    }

    return res;
};