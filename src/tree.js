const Node = require("./node");

const Tree = (arr) => {
  const processArr = (arr) => {
    const sortedArr = arr
      .filter((item, index) => arr.indexOf(item) === index)
      .toSorted((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }

        return 0;
      });

    return sortedArr;
  };

  const buildTree = (arr, start, end) => {
    if (start > end) {
      return null;
    }

    const mid = parseInt((start + end) / 2);
    const node = Node(arr[mid]);

    node.leftNode = buildTree(arr, start, mid - 1);
    node.rightNode = buildTree(arr, mid + 1, end);
    return node;
  };

  const sortedArr = processArr(arr);
  let root = buildTree(sortedArr, 0, sortedArr.length - 1);

  const insert = (currNode, val) => {
    if (currNode === null) {
      return Node(val);
    }

    if (currNode.data === val) {
      return currNode;
    }

    if (val < currNode.data) {
      currNode.leftNode = insert(currNode.leftNode, val);
      console.log("Goes left");
    } else if (val > currNode.data) {
      currNode.rightNode = insert(currNode.rightNode, val);
      console.log("Goes right");
    }

    return currNode;
  };

  const getSuccessor = (currNode) => {
    currNode = currNode.right;
    while (currNode !== null && currNode.leftNode !== null) {
        currNode = currNode.leftNode;
    }
    return currNode;
}

  const del = (currNode, val) => {
    if (currNode === null) {
      return currNode;
    }

    if (currNode.data > val) {
      currNode.leftNode = del(currNode.leftNode, val);
    } else if (currNode.data < val) {
      currNode.rightNode = del(currNode.rightNode, val);
    } else {
      // currNode has 0 or 1 right child
      if (currNode.leftNode === null) 
        return currNode.rightNode;

      // currNode has only left child
      if (currNode.rightNode === null) 
          return currNode.leftNode;

      // When both children are present
      let succ = getSuccessor(currNode);
      currNode.data = succ.data;
      currNode.rightNode = delNode(currNode.rightNode, succ.data);
    }

    return currNode;
  };

  const find = (val) => {
    let currNode = root;

    while(currNode.data !== val) {  
      if (val < currNode.data) {
        currNode = currNode.leftNode;
        console.log("Goes left");
      } else if (val > currNode.data) {
        currNode = currNode.rightNode;
        console.log("Goes right");
      }
    }

    return currNode;
  };

  const levelOrder = (callback, currNode = root) => {
    if (!callback) {
      throw Error("A callback is required.")
    }
    
    if (currNode === null) {
      return;
    }

    const queue = [currNode];

    while (queue.length > 0) {
      let current = queue.shift();

      callback(current);

      if (current.leftNode) {
        queue.push(current.leftNode);
      }

      if (current.rightNode) {
        queue.push(current.rightNode);
      }
    }
  };

  return { root, insert, del, find, levelOrder };
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightNode !== null) {
    prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftNode !== null) {
    prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

module.exports = { Tree, prettyPrint };
