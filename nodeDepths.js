//The distance between a node in a Binary Tree and the tree's root is called a node's depth.
//Write a function that takes in a Binary Tree and reutnrs the sum of it's nodes' depths.
//Each *BinaryTree* node has an integer *value*, a *left* child node, and a *right* child node. Children nodes can either be BinaryTree nodes themselves or *None*/*null*.

// Sample input: tree =    1
//                       /   \
//                      2     3
//                   /   \  /  \
//                  4    5 6   7
//                /  \
//               8   9

//Sample Output: 16
//The depth of the node with value 2 is 1.
//The depth of the node with value 3 is 1.
//The depth of the node with value 4 is 2.
//The depth of the node with value 5 is 2.
//The depth of the node with value 6 is 2.
//The depth of the node with value 7 is 2.
//The depth of the node with value 8 is 3.
//The depth of the node with value 9 is 3.
//Summing all of these values we get 16.

//This problem is almost identical to branch sums as we just worked on, given that we have to depth-first search through a binary tree and sum the depth of the nodes. The logic here is we write a DFS helper function and in that function we pass in the node and current level. If there is no node, we return 0 and we're done. Then we just return the current value of level PLUS a recursive call of the DFS function passing in the left node as well as adding 1 to the current value of level PLUS another recursive call of the DFS function passing in the right now as well as adding 1 to the current value of the level. This equates to the sum of all node depths. At the end of this recursive search, we'll be left with the node depths.

//The time complexity of this algorithm is O(n) given that n is the amount of nodes in the tree. This is because at every node, we're just adding values(constant time operation). So at the worst case, we're spending O(n) traversing the tree of n nodes. The space complexity is O(h) given the height of the tree.

//O(n) time | O(h) space complexity
function nodeDepths(root) {
  // Write your code here.
  return sumDepths(root, 0);
}

function sumDepths(node, level) {
  if (!node) return 0;

  return (
    level + sumDepths(node.left, level + 1) + sumDepths(node.right, level + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
