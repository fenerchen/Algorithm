/**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

 * @param {number[]} nums
 * @return {number[][]}
 解题思路：（相遇求和）先排序，便于以后操作。外层从头循环作为第一个被加数，
 第二个被加数从第一个被加数后递增遍历，定义变量begin，第三个被加数从len开始递减遍历，
 定义变量end，若sum==0,则加入三者数组。否则继续++、--。当begin与前一个begin相等时begin++，
 同理end，直到begin==end。

 */
var threeSum = function(nums) {
  var len=nums.length;
    var res=[];
    if(len<3){
        return [];
    }
    function compare(v1,v2){
        return v1-v2;
    }
    nums.sort(compare);
   for(var i=0;i<len;i++){
       if(nums[i]>0){
            break;
       }
       if(i>0&&nums[i]===nums[i-1])continue;
       var begin=i+1,end=len-1;
       while(begin<end){
           var sum=nums[i]+nums[begin]+nums[end];
           if(sum===0){
               res.push([nums[i],nums[begin],nums[end]]);
               begin++;
               end++;
               while(begin<end&&nums[begin]===nums[begin-1]){
                   begin++;
               }
               while(begin<end&&nums[end]===nums[end+1]){
                   end--;
               }
           }else if(sum>0){
               end--;
           }else{
               begin++;
           }
       }
   } 
    return res;
};