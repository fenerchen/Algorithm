/**
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 树中结点的最大层次称为树的高度或树的深度。根节点为第一层！
 树的深度是从根节点开始（其深度为1）自顶向下逐层累加的，
 而高度是从叶节点开始（其高度为1）自底向上逐层累加的。
 虽然树的深度和高度一样，但是具体到树的某个节点，
 其深度和高度是不一样的。我的理解是：
 非根非叶结点的深度是从根节点数到它的，高度是从叶节点数到它的。
 */
var maxDepth = function(root) {
  
//     if(node){
        
//     return Math.max(arguments.callee(node.left), arguments.callee(node.right)) + 1; 
//     }
//     return 0;
    if(!root){
         return 0;
    }
        var l=maxDepth(root.left);//加var，否则是全局变量，l的值会在计算右子树是重写
        var r=maxDepth(root.right);
        return Math.max(l,r)+1;       
};