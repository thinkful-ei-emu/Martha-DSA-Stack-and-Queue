class _Node {
  constructor(data, next){
    this.data = data; 
    this.next = next; 
  }
}

class Stack {
  constructor(){
    this.top = null;
  } 
  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop(){
    const node = this.top;
    this.top = node.next; 
    return node.data; 
  }
}


function main(){
  let starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();
  //console.log(starTrek);
  return starTrek;
}
//console.log(main());

let stack = main();
let empty = new Stack();

function peek(stack){
  return stack.top;
}
//console.log(peek(stack));

function isEmpty(stack){
  if (stack.top === null){
    return 'This stack is empty';
  }
  else{
    return 'There are items in this stack';
  }
}
// console.log(isEmpty(stack));
// console.log(isEmpty(empty));

function display(stack){
  let display = [];
  let node = stack.top;
  if(stack.top === null){
    return 'This is an empty stack';
  }
  while(node !== null){
    display.push(node);
    node = node.next;
  }
  return display;
}
//console.log(display(stack));


function palindrome(string){
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();
  let stringArr = string.split('');
  stringArr.forEach(letter => stack.push(letter));
  if(stack.top === null){
    return 'This stack is empty';
  }
  let node = stack.top;
  for(let i = 0; i < stringArr.length; i++){
    if(node.data !== string[i]) {
      return false; 
    }
    node = node.next;
  }
  return true;
}
// True, true, true, false
// console.log(palindrome('dad'));
// console.log(palindrome('A man, a plan, a canal: Panama'));
// console.log(palindrome('1001'));
// console.log(palindrome('Martha'));


function parentheses(expression){
  let stack = new Stack();
  let arr = expression.split('');
  arr.forEach(paran => stack.push(paran));
  let node = stack.top;
  let counter = 0;
  while(node !== null){
    if(node.data === '('){
      counter --;
    }
    if(node.data === ')'){
      counter ++;
    }
    if(counter < 0){
      return 'Incorrect parentheses';
    }
    node = node.next;
  }
  if (counter === 0){
    return 'Correct parentheses';
  }
  else{
    return 'Incorrect parentheses';
  }
}
// console.log(parentheses('()(w)()frsw)')); //false
// console.log(parentheses('()q3r()fq()')); //true

function sort(stack){
  let temp = new Stack();
  let final = new Stack();
  //holder largest node
  let largestNode = null;
  //while loop 
  let node = stack.top;
  while(node !== null){
    if(node.data > largestNode){
      largestNode = node;
    }
    node = node.next;
  }

  node = stack.top;
  //push pop values into tempStack until you reach largest
  while(node !== null){
    if(node !== largestNode){
      temp.push(stack.pop());
    }
    else{
      final.push(stack.pop());
    }
    node=node.next;
  }

  node = temp.top;
}

let number = new Stack();
number.push(3);
number.push(1);
number.push(2);

console.log(sort(number));