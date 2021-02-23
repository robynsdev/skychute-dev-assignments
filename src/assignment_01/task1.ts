class Stack {
  nodes: number[];
  maxAry: number[];

  constructor() {
    this.nodes = [];
    this.maxAry = [];
  }

  push(value: number) {
    // maxAry
    if (
      this.maxAry.length === 0 ||
      value >= this.maxAry[this.maxAry.length - 1]
    ) {
      this.maxAry[this.maxAry.length] = value;
    }
    // nodes
    this.nodes[this.nodes.length] = value;
  }

  pop() {
    // maxAry
    if (
      this.maxAry[this.maxAry.length - 1] === this.nodes[this.nodes.length - 1]
    ) {
      this.maxAry.length = this.maxAry.length - 1;
    }
    // nodes
    let pop = this.nodes[this.nodes.length - 1];
    this.nodes.length = this.nodes.length - 1;
    return pop;
  }

  max() {
    return this.maxAry[this.maxAry.length - 1];
  }
}

let stack = new Stack();
stack.push(-1);
stack.push(1);
stack.push(-1);
stack.pop();
stack.pop();
stack.max();

stack.push(2);
stack.push(3);
stack.push(5);
stack.push(4);
stack.max();
// console.log(stack);
// stack.pop();
// stack.pop();
console.log(stack);
// stack.max();
