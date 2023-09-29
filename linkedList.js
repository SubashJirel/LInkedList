import Node from './createNode.js';

export default class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // this.head inside createNode(data, this.head) becuase if head is not empty meaning there was already a node, then that new node's next will have to be the current head
    this.size += 1;
  }
  //insert last node
  insertLast(data) {
    const node = new Node(data);
    let current;
    if (this.head === null) {
      this.head = node; // if the head is empty then inserting last means inserting in the head
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  //get at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index == 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count += 1;
    }
    previous.next = node;
    node.next = current;

    this.size++;
  }

  //remove at index

  //printList data
  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
