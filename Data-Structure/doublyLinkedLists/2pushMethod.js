class Node {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //  create node
    const newNode = new Node(val);

    // if the list is empty set the head and the tail to be new node
    if (this.length === 0 || !this.head) {
      this.head = this.tail = newNode;
    } else {
      // else set the next to be newNode and newNode.prev to be the tail and the tail to be newNode
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
console.log(list);
list.push(29);
list.push("hello ");
console.log(list);
