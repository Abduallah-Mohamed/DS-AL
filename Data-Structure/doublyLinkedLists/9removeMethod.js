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

  pop() {
    // if the list is empty return undefined.
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    // if the list has only one item set the head and tail to be null.
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      poppedNode.prev = null;
      this.tail.next = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    // if the list is empty return undefined.
    if (!this.length === 0) return undefined;

    // save the old head node to a variable.
    const oldHead = this.head;

    // if the list has only one element
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // make new head to be that var
      this.head = oldHead.next;

      // clear the reference
      this.head.prev = null;

      // second step of clearing the reference
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    let current;
    if (index >= this.length || index < 0) return null;

    if (index >= this.length / 2) {
      current = this.tail;
      for (let i = this.length; i > this.length / 2; --i) {
        if (index === i - 1) {
          current = current.prev;
        }
      }
    } else if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < this.length / 2; i++) {
        if (index === i - 1) {
          current = current.next;
        }
      }
    }
    return current;
  }

  set(index, val) {
    const oldNode = this.get(index);

    if (oldNode === null) return false;

    oldNode.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);

    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const preNode = this.get(index - 1);
    const nextNode = preNode.next;

    preNode.next = newNode;
    newNode.prev = preNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return !!this.unshift(index);

    if (index === this.length - 1) return !!this.pop(index);

    const currentNode = this.get(index);

    console.log(currentNode);
    console.log(currentNode.prev);
    console.log(currentNode.prev.next);

    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;

    currentNode.next = null;
    currentNode.prev = null;

    this.length--;

    return true;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(29);
list.push(33);
list.push(33);
list.push(33);
list.push(33);
list.push(33);
list.pop();
list.shift();
list.unshift(4444);
// console.log(list.get(1));
// console.log(list.get(7));
// console.log(list.get(-4));

// console.log(list.set(1, "sdfkjsdjkhsdjsj"));
// console.log(list.set(18, "223423324423432"));
// console.log(list.set(-18, "223423324423432"));
// console.log(list.length);
// console.log(222222, list.insert(3, "inserting ...")); // false
// console.log(333333, list.insert(2, "inserting ...")); // true
// console.log(111111, list.insert(1, "inserting ...")); // true
// console.log(111111, list.insert(0, "inserting ...")); // true
// console.log(324324234, list.insert(-23, "inserting ...")); // false

console.log(list.length);
console.log(34234234, list.remove(4));
console.log(34234234, list.remove(0));
console.log(34234234, list.remove(5));
console.log(list.length);
console.log(list);
