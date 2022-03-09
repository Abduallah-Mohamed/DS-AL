class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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

  // ? pop functionality
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // check if the length equal zero, then put the head and the tail to be equal null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const newSinglyLinkedList = new SinglyLinkedList();
newSinglyLinkedList.push("1");
newSinglyLinkedList.push(2);
newSinglyLinkedList.push(54);
console.log("hello");
console.log(newSinglyLinkedList.pop());
console.log(newSinglyLinkedList);
