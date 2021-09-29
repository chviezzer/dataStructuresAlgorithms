import { Compare, defaultCompare, Node } from "../utils/utils.js";

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = Number;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key); //to pass the root node and the key we want to insert as parameters
    }
  }

  insertNode(node, key) {
    // check the left child of the node
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key); //insert the new key as the left node
      } else {
        // compare next time will be the left child of the current node (left node subtree).
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  getRoot() {
    return this.root;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  inOrderTransverse(cbk) {
    this.inOrderTransverseNode(this.root, cbk);
  }
  inOrderTransverseNode(node, cbk) {
    if (node != null) {
      this.inOrderTransverseNode(node.left, cbk);
      cbk(node.key);
      this.inOrderTransverseNode(node.right, cbk);
    }
  }

  preOrderTransverse(cbk) {
    this.preOrderTransverseNode(this.root, cbk);
  }

  preOrderTransverseNode(node, cbk) {
    if (node != null) {
      cbk(node.key);
      this.preOrderTransverseNode(node.left, cbk);
      this.preOrderTransverseNode(node.right, cbk);
    }
  }

  postOrderTransverse(cbk) {
    this.postOrderTransverseNode(this.root, cbk);
  }

  postOrderTransverseNode(node, cbk) {
    if (node != null) {
      this.postOrderTransverseNode(node.left, cbk);
      this.postOrderTransverseNode(node.right, cbk);
      cbk(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(nde.eft, key);
      return node;
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    if (node.left == null && node.right == null) {
      node = undefined;
      return node;
    }
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log(tree.search(11));

const printNode = (values) => console.log(values);
tree.inOrderTransverse(printNode);
