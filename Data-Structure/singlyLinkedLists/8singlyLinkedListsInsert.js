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

  // ? Update specific Node in the list using its index
  set(index, newValue) {
    let theAimedNode = this.get(index);

    if (theAimedNode) {
      theAimedNode.val = newValue;

      // return theAimedNode; OR
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;

    // if the index is equal to the length we use the push method
    if (index === this.length) return !!this.push(value); // !!0 === false , //anyTruthyValue === true

    // if index is equal to zero, use the unshift method to insert in the begining of the linked list
    if (index === 0) return !!this.unshift(value);

    // if the item in any way in the list
    const nextNode = this.get(index);
    const preNode = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = nextNode;
    preNode.next = newNode;

    this.length++;

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.insert(0, 50);
list.insert(5, 60);
list.insert(3, 70);
list.insert(234, 342);
console.log(list);
