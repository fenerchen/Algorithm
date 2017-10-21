/**
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5. 
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var trim_s=s.trim();//裁剪字符串两端的空格
    if(s){
        
        var arr_str=trim_s.split(' ');
        var len=arr_str.length;
            return arr_str[len-1].length;
    }
    return 0;
};