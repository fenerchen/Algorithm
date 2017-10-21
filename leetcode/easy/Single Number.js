/**
Given an array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var number=0;
     function compare(value1,value2){
      if(value1<value2){
        return -1;
      }else if(value1>value2){
        return 1;
      }else{
        return 0;
      }
    }
    nums.sort(compare);
    for(var i=0;i<nums.length;i+=2){
        if(nums[i]!=nums[i+1]){
            number=nums[i];
            break;
        }
    }
    return number;
};