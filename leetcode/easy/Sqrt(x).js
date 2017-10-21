/**
Implement int sqrt(int x).

Compute and return the square root of x.
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
   var low=0;
    var high=x;
    var mid=(low+high)/2;
    do{
     
        if(mid*mid>x){
            high=mid
        }else{
            low=mid
        }
        var last=mid;
        mid=(low+high)/2;
    }
    while(Math.abs(last-mid)!=0)
        return Math.floor(mid);
       
};