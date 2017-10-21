/**
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer. 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var stepa=1;
    var stepb=2;
    if(n==1){
        return 1;
    }else if(n==2){
         return 2;
    }else{
        for(var i=3;i<=n;i++){
        var temp=stepa+stepb;
        stepa=stepb;
        stepb=temp;
        }
    return stepb;
    }  
};