/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxNodes = (node, sum)=> {
        if(node === null){
            return sum
        }
        return Math.max(maxNodes(node.left, sum + 1), maxNodes(node.right, sum + 1))
    }
    return maxNodes(root,0)
};