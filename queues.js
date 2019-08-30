class _Node{
  constructor(value){
    this.value = value; 
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue(){
    if(this.first === null){
      return; 
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function main(){
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  return starTrekQ;
}
//console.log(main());

let queue = main();

function peek(queue){
  if(queue.first === null){
    return 'This queue is empty';
  }
  return queue.first;
}
//console.log(peek(queue));

function isEmpty(queue){
  if(queue.first === null){
    return true;
  }
  return false;
}
let empty = new Queue();
// console.log(isEmpty(queue));
// console.log(isEmpty(empty));

function display(queue){
  if(isEmpty(queue)){
    return 'This is an empty queue';
  }
  let node = queue.first;
  while(node !== null){
    console.log(node);
    node = node.next;
  }
}
//console.log(display(queue));


class _DoublyNode {
  constructor(value){
    this.value = value; 
    this.next = null; 
    this.prev = null;
  }
}

class DoublyQueue{
  constructor(){
    this.first = null; 
    this.last = null; 
  }
  enqueue(value){
    const node = new _Node(value);
    if(this.first === null){
      this.first = node;
      this.first.prev = null;
    }
    if(this.last){
      node.prev = this.last;
      this.last.next = node; 
    }
    this.last = node;
  }
  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null; 
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function mainDoubly(){
  let starTrekQ = new DoublyQueue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  return starTrekQ;
}
//console.log(display(mainDoubly()));
