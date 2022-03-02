// ? Create New Node Class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ? Create New Single Linked Lists
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // ? Push functionality
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const l = new SinglyLinkedList();

l.push("hello");
l.push("mango");

console.log(l);
