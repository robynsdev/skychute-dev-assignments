class Queue {
  nodes: number[];
  maxAry: number[];
  maxLow: number;
  lowest: number;

  constructor() {
    this.nodes = [];
    this.maxAry = [0];
    this.maxLow = 0;
    this.lowest = 0;
  }

  push(value: number): void {
    // maxAry
    while (value > this.maxAry[this.maxAry.length - 1]) {
      this.maxAry.length = this.maxAry.length - 1;
    }
    this.maxAry[this.maxAry.length] = value;
    // nodes
    this.nodes[this.nodes.length] = value;
  }

  pop(): number | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    }
    // maxAry
    if (this.maxAry[this.maxLow] === this.nodes[this.lowest]) {
      delete this.maxAry[this.maxLow];
      this.maxLow++;
    }
    // nodes
    let pop: number = this.nodes[this.lowest];
    delete this.nodes[this.lowest];
    this.lowest++;
    return pop;
  }

  max(): number {
    return this.maxAry[this.maxLow];
  }
}

let queue = new Queue();
stack.push(1);
stack.push(3);
stack.push(2);
stack.pop(); // 1
stack.max(); // 3
