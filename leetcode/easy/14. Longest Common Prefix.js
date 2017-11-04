/**
 * @param {string[]} strs
 * @return {string}
 Write a function to find the longest common prefix string amongst an array of strings. 
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    var prefix = strs[0];
    var len = strs[0].length;
    for (var i = 1; i < strs.length; i++) {
        var j;
        for (j = 0; j < Math.min(len, strs[i].length); j++) {
            if (prefix[j] != strs[i][j]) {
                len = j;
                break;
            }

        }
        if (len > j) {
            len = j;
        }
    }
    return strs[0].substr(0, len);
};