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

    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);
    return node;
  };

  const sortedArr = processArr(arr);
  let root = buildTree(sortedArr, 0, sortedArr.length - 1);

  return root;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

module.exports = { Tree, prettyPrint };
