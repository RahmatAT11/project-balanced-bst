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

  return { root, insert };
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
