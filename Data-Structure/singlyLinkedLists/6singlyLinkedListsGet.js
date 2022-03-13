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

  // ? add to the end of the array
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // ? delete from the end of the linkedList
  pop() {
    // ? if there is no elements in the singly linked list return undefined
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

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  // ? Delete the first element in singly linked list
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) this.tail === null;

    return currentHead;
  }

  // ? put element in the front of linked list
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      // this.tail = newNode; OR
      this.tail = this.head;
    } else {
      newNode.next = this.head;

      this.head = newNode;
    }

    // console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    // console.log(this);
    // console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    this.length++;
    return this;
  }

  // ? Get using the index of the element in singly linked list
  get(index) {
    if (!this.head || this.length < index) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

const newInstanceFromLL = new SinglyLinkedList();

newInstanceFromLL.push(1);
newInstanceFromLL.push(20);
newInstanceFromLL.push(30);
newInstanceFromLL.push(100);

newInstanceFromLL.unshift(19);

console.log(newInstanceFromLL.get(2));
console.log(newInstanceFromLL.get(0));
console.log(newInstanceFromLL.get(1));

console.log(newInstanceFromLL);
