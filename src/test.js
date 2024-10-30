const { Tree, prettyPrint } = require("./tree");

function runTest() {
  function getRandomNumberUnder100() {
    return Math.floor(Math.random() * 100);
  }

  function getRandomNumberAbove100() {
    return Math.floor(Math.random() * 901) + 100; // 901 = 1000 - 100 + 1
  }

  function createArrWithRandomInt(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(getRandomNumberUnder100());
    }

    return arr;
  }

  function logElementInBST(node) {
    console.log(`-> ${node.data} `);
  }

  const arr = createArrWithRandomInt(20);

  // 1. create tree
  const tree = Tree(arr);

  // 2. check if tree is balanced
  console.log(`Is tree balanced: ${tree.isBalance()}`);

  // 3. print out element in level, pre, post, and in order
  console.log("Level Order")
  tree.levelOrder(logElementInBST);

  console.log("pre Order")
  tree.preOrder(logElementInBST);

  console.log("post Order")
  tree.postOrder(logElementInBST);

  console.log("in Order")
  tree.inOrder(logElementInBST);

  // 4. unbalance the tree
  for (let i = 0; i < 5; i++) {
    tree.insert(tree.root, getRandomNumberAbove100());
  }

  // 5. check if it is unbalance
  console.log(`Is tree balanced: ${tree.isBalance()}`);

  // 6. rebalance the tree
  tree.rebalance();

  // 7. check if it is unbalance
  console.log(`Is tree balanced: ${tree.isBalance()}`);

  // 8. print out element in level, pre, post, and in order
  console.log("Level Order");
  tree.levelOrder(logElementInBST);

  console.log("pre Order");
  tree.preOrder(logElementInBST);

  console.log("post Order");
  tree.postOrder(logElementInBST);

  console.log("in Order");
  tree.inOrder(logElementInBST);

  prettyPrint(tree.root, "", true);
}

module.exports = runTest;
