import linkedList from './linkedList.js';

const link1 = new linkedList();
link1.insertFirst(100);
link1.insertLast(200);
link1.insertLast(300);

link1.insertAt(250, 2);

// link1.getAt(1);
link1.removeAt(2);
// link1.clearList();
link1.printList();
