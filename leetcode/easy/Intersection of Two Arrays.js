/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}

Discription:
    Given two arrays, write a function to compute their intersection.

Example:
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2]. 
 */

var intersection = function(nums1, nums2) {
    var nums1_len=nums1.length;
    var nums2_len=nums2.length;
    var count=0;
    var number= new Array();
    if(nums1_len>nums2_len){
        for(var i=0;i<nums2_len;i++)
            for(var j=0;j<nums1_len;j++){
                if(nums2[i]==nums1[j]){
                	if(count==0){
                		count=number.push(nums2[i]);
                	}else{
                		for(var k=0;k<count;k++){
                			if(nums2[i]==number[k]){
                				break;
                			}else if(k==count-1){
                				count=number.push(nums2[i]);
                				}
                		}       
                	}
                }
           	 }
    }else{
        for(var i=0;i<nums1_len;i++)
            for(var j=0;j<nums2_len;j++){
                if(nums1[i]==nums2[j]){
                   	if(count==0){
                		count=number.push(nums1[i]);
                	}else{
                		for(var k=0;k<count;k++){
                			if(nums1[i]==number[k]){
                				break;
                			}else if(k==count-1){
                				count=number.push(nums1[i]);
                				}
                		}       
                	}
                }       
            }
        }
  
    return number;
};
alert(intersection([1,2],[2,1]));