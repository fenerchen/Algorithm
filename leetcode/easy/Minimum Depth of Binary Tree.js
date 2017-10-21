/**
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(node) {
    if (node==null)
        return 0;
    var l=minDepth(node.left);
    var r=minDepth(node.right);
    if(Math.min(l,r)==0){
        return Math.max(l,r)+1;
    }else{
        return Math.min(l,r)+1;
    }
};