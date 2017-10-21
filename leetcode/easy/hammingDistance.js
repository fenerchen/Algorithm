var hammingDistance = function(x, y) {
    var or=x^y;
    var or_str=or.toString(2);
    var number;
    var n=or_str.match(/1/g);
    if(n){
    	number=n.length;
    }
    else{
    	number=0;
    }
    return number;  
};
alert(hammingDistance('1','4'));