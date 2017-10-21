/**
 Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it. 
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var numb=0;
    if(num>-1&&num<10){
        return num;
}else{
    var str_num=num.toString();
    for(var i in str_num){
        numb+=Number(str_num[i]);
        }
    return arguments.callee(numb);
    }
};