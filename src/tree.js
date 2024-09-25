const Node = require("./node");

const Tree = (arr) => {
  const arrProcess = (arr) => {
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

    console.log(sortedArr);
  };

  const buildTree = (arr) => {
    const sortedArr = arrProcess(arr);
  };

  let root = buildTree(arr);

  return {};
};

module.exports = Tree;
