import node from './createNode.js';

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Insert first node
  insertFirst(data) {
    this.head = new node(data, this.head); // this.head inside createNode(data, this.head) becuase if head is not empty meaning there was already a node, then that new node's next will have to be the current head
  }
  //insert last node

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

link1.printList();
