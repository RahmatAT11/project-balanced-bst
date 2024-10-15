const { Tree, prettyPrint } = require('./src/tree');

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const test = Tree(arr);
const node = test.insert(test.root, 2);

prettyPrint(test.root, "~", false);