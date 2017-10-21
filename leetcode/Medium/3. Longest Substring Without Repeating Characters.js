/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */

/*遍历主串，保存在子串中，计数器增加，若有字符与子串相等，
则舍去子串中该字符及其以前的字符，更新计数器的值，并将计数器存入数组中
返回最大计数器值*/
var lengthOfLongestSubstring = function(s) {
    var subS='';
    var count=0;
    var result=[];

    for(var i in s){
        var index=subS.indexOf(s[i]);
        if(index<0){
            subS+=s[i];
            count++;
        }else{
            result.push(count);
            subS=subS.substring(index+1);
            subS+=s[i];
            count=count-index;
        }
    }
            result.push(count);
    return Math.max.apply(Math,result);

};