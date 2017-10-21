/**Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array. 
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var queue=[];
    var number=[];
    queue.push(root);
    while(queue.length>0){
        var sum=0;
        var count=0;
        var temp=[];
        while(queue.length>0){      
            var node=queue.shift();
            sum+=node.val;
            count++;
            if(node.left){
                temp.push(node.left);
            }
            if(node.right){
                temp.push(node.right);
            }
        }
        queue=temp;
        number.push(sum/count);
    }
    return number;
};