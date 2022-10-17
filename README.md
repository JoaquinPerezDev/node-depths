# node-depths

ALGO EXPERT EASY

The distance between a node in a Binary Tree and the tree's root is called a node's depth.<br>
Write a function that takes in a Binary Tree and reutnrs the sum of it's nodes' depths.<br>
Each *BinaryTree* node has an integer *value*, a *left* child node, and a *right* child node. Children nodes can either be BinaryTree nodes themselves or *None*/*null*.<br>

 Sample input: tree =    1<br>
                       /   \<br>
                      2     3<br>
                   /   \  /  \<br>
                  4    5 6   7<br>
                /  \  <br>
               8   9 <br>

Sample Output: 16<br>
The depth of the node with value 2 is 1.<br>
The depth of the node with value 3 is 1.<br>
The depth of the node with value 4 is 2.<br>
The depth of the node with value 5 is 2.<br>
The depth of the node with value 6 is 2.<br>
The depth of the node with value 7 is 2.<br>
The depth of the node with value 8 is 3.<br>
The depth of the node with value 9 is 3.<br>
Summing all of these values we get 16.<br>
