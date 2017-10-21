/**
 Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:

    Each element in the result must be unique.
    The result can be in any order.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   function compare(v1,v2){
       if(v1>v2){
           return 1;
       }else if(v1<v2){
            return -1;
       }else{
           return 0;
       }
   }
    var number=[];
    nums1.sort(compare);
    nums2.sort(compare);
    for(var i=0,j=0;i<nums1.length&&j<nums2.length;){
        if((nums1[i]==nums2[j])&&(number.indexOf(nums1[i])==-1)){
            number.push(nums1[i]);
        }else if(nums1[i]>nums2[j]){
            j++;
        }else{
            i++;
        }
    }
  
    return number;
};