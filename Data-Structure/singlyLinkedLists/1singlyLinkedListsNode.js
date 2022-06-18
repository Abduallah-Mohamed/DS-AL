class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ! THE NAIVE WAY
// * the naive way is to create a new node and assign it to the next property of the current node
// * this is a O(n) operation
// * this is not the best way to create a linked list
// * this is not the best way to insert a node in the middle of a linked list
// * this is not the best way to insert a node in the end of a linked list
// * this is not the best way to insert a node in the beginning of a linked list
// * this is not the best way to delete a node from the middle of a linked list
// * the best way is to use a pointer to the previous node and assign the next property of the previous node to the next property of the current node (the next property of the current node is now the previous node)
// create some naive nodes
const first = new Node("hi");
console.log(first);
first.next = new Node("there");
console.log(first);
first.next.next = new Node("How");
console.log(first);
first.next.next.next = new Node("are");
console.log(first);
first.next.next.next.next = new Node("you?");
console.log(first);
