class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    console.log('newNode : '+newNode.value);
    if(this.root == null){
      console.log('found null root');
      this.root = newNode;
      return newNode;
    }
    let currentNode = this.root;
    while(currentNode){
      console.log('comparing '+value +' '+currentNode.value );
      if(value > currentNode.value){
        if(currentNode.right == null){
            currentNode.right = newNode;
            console.log('inserting right'+value);
            break;
        }
        else{
          currentNode = currentNode.right;
        }
        continue;
      }
      else if(value < currentNode.value){
        if(currentNode.left == null){
          currentNode.left = newNode;
          console.log('inserting left'+value);
          break;
        }
        else{
          currentNode = currentNode.left;
        }
        continue;
      }
      else{
        console.log('Duplicate vertex not allowed');
      }
    }
  }
  lookup(value){
    if(this.root == null){
      console.log('Empty Tree');
      return null;
    }
    let currentNode = this.root;
    while(currentNode){
      console.log('comparing '+value +' '+currentNode.value );
      if(value == currentNode.value){
        console.log('Value found!'+currentNode);
        return currentNode;
      }
      else if(value > currentNode.value){
        if(currentNode.right == null){
            console.log('Value not found!');
            break;
        }
        else{
          currentNode = currentNode.right;
        }
        continue;
      }
      else if(value < currentNode.value){
        if(currentNode.left == null){
          console.log('Value not found');
          break;
        }
        else{
          currentNode = currentNode.left;
        }
        continue;
      }
      
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree);
JSON.stringify(traverse(tree.root))
tree.lookup(170);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





