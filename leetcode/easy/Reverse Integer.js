/**
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows. 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str=x.toString();
    var number = '';
    if(str.indexOf('-')>=0){
        var str_remove=str.slice(1);
        number='-';
        for(var i=str_remove.length-1;i>=0;i--){
            number+=str_remove[i];
        }
    }else{
        for(var i=str.length-1;i>=0;i--){
            number+=str[i];
        }
    }
    if((parseInt(number)>(Math.pow(2,31)-1))||(parseInt(number)<-(Math.pow(2,31))))
        {
            return 0;
        }
    else{
        return parseInt(number);
    }
    
};