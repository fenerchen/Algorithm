/**

 Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3. 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 法一适用于未排好序的链表。空间复杂度2n
 法二适用于已排好序的链表。思路，定义两个指针，当前指针和上次指针，如二者所指的值相等，则将历史指针的next指向当前指针的next，达到删除重复数值的目的；若数值不相等，则继指针下挪，继续比较。
 */
var deleteDuplicates = function(head) {
    
//     var dict={};
//     var res=[];
//     while(head){
//         if(!(head.val in dict)){
//              dict[head.val]=true;
//             res.push(head.val);
//         } 
//         head=head.next;
//     }
       // return res;
   
    if(!head){
        return null;
    }
    var pre=head;
    var cur=head.next;
    
    while(cur){
        if(pre.val==cur.val){
            cur=cur.next;
            pre.next=cur;        
        }else{
            pre=cur;
            cur=cur.next;
        }
    }
    return head;
};