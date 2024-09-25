const Node = (value) => {
  let data = value;
  let leftNode = null;
  let rightNode = null;

  return { data, leftNode, rightNode };
};

module.exports = Node;