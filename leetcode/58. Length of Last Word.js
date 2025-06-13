/**
 * @param {string} s
 * @return {number}
 */
function isSpace(str) {
  return /^[\s]+$/.test(str);
}

var lengthOfLastWord = function(s) {
    var count = 0;
    var i = s.length -1; 

    while (isSpace(s[i])) i--;
    while (s[i] && !isSpace(s[i]))  {
        i--; count++;
    }

    return count;
};