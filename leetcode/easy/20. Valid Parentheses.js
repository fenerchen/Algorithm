/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {string} s
 * @return {boolean}
 从头遍历，将字符入栈，若匹配则弹出。最后栈为空则为true
 */
var isValid = function(s) {
    var stack = [];
    var len = s.length;
    if (len <= 1) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
        } else {
            if ((stack[stack.length - 1].charCodeAt(0) + 1 == s.charCodeAt(i)) || (stack[stack.length - 1].charCodeAt(0) + 2 == s.charCodeAt(i))) {
                stack.pop()
            } else {
                stack.push(s[i]);
            }
        }
    }

    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
};