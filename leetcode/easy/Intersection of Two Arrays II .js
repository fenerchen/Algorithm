/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}

Discription:
    Given two arrays, write a function to compute their intersection.

Example:
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2,2]. 
 */


var intersection = function(nums1, nums2) {
    var nums1_len=nums1.length;
    var nums2_len=nums2.length;
    var number= new Array();
    function compare(value1,value2){
        if (value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    }
    nums1.sort(compare);
    nums2.sort(compare);
    for(var i=0,j=0;i<nums1.length&&j<nums2.length;){
            if(nums1[i]==nums2[j]){
                number.push(nums1[i]);
                i++;
                j++;
            }else if(nums1[i]>nums2[j]){
                j++;
            }else{
                i++;
            }   
    }
    return number;
};
alert(intersection([3,4,1,2,2,3],[2,1,2,4,5,2]));