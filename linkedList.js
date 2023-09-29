import Node from './createNode.js';

class linkedList {
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

const link1 = new linkedList();
link1.insertFirst('one');
link1.insertFirst('two');
link1.insertFirst('three');

link1.insertLast(400);
link1.insertLast(500);

link1.printList();
