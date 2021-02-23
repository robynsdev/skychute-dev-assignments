class Stack {
  nodes: number[];
  maxAry: number[];

  constructor() {
    this.nodes = [];
    this.maxAry = [];
  }

  push(value: number): void {
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

  pop(): number {
    // maxAry
    if (
      this.maxAry[this.maxAry.length - 1] === this.nodes[this.nodes.length - 1]
    ) {
      this.maxAry.length = this.maxAry.length - 1;
    }
    // nodes
    let pop: number = this.nodes[this.nodes.length - 1];
    this.nodes.length = this.nodes.length - 1;
    return pop;
  }

  max(): number {
    return this.maxAry[this.maxAry.length - 1];
  }
}
