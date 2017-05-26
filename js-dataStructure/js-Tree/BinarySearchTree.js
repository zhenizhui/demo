// js中的二叉搜索树(BST)

function BinarySearchTree() {

  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  /**
   * @description 插入节点
   * @param node
   * @param newNode
   */
  var _insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        _insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        _insertNode(node.right, newNode);
      }
    }
  };


  /**
   * @description 向树中插入一个新的键。
   * @param key
   */
  this.insert = function (key) {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      _insertNode(root, newNode);
    }
  };
}