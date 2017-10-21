/**
 Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6. 
 * @param {number[]} nums
 * @return {number}
 使用动态规划
 */
var maxSubArray = function(nums) {
    var max=0;
    var sum=nums[0];
    for(i=0;i<nums.length;i++){
        if(max>0){
            max+=nums[i];
        }else{
            max=nums[i];
        }
        if(max>sum){
            sum=max;
        }
    }
    return sum;
};