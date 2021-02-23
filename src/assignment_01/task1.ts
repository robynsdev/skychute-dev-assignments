class Stack {
  nodes: number[];
  maxAry: number[];

  constructor() {
    this.nodes = [];
    this.maxAry = [0];
  }

  push(value: number) {
    // maxAry
    if (value > this.maxAry[this.maxAry.length - 1]) {
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
    console.log(this.nodes[this.nodes.length - 1]);
    this.nodes.length = this.nodes.length - 1;
  }

  max() {
    console.log(this.maxAry[this.maxAry.length - 1]);
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(4);
stack.max();
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);
stack.max();
