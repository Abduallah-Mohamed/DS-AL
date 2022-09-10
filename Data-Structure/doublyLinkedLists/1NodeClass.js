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
}

const node = new Node(17);
console.log(node);
