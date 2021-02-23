// export interface Node<T> {
//   value: T;
//   next: Node<T> | null;
// }

// class Queue {
//   head: Node<T> | null = null;
//   tail: Node<T> | null = null;
//   }

//   push(value: number) {
//     let node = {
//       value: value,
//       next: null,
//     };
//     if (!this.head) {
//       this.head = node;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }
// }

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

  push(value: number) {
    // maxAry
    while (value > this.maxAry[this.maxAry.length - 1]) {
      this.maxAry.length = this.maxAry.length - 1;
    }
    this.maxAry[this.maxAry.length] = value;
    // nodes
    this.nodes[this.nodes.length] = value;
  }

  pop() {
    // maxAry
    if (this.maxAry[this.maxLow] === this.nodes[this.lowest]) {
      delete this.maxAry[this.maxLow];
      this.maxLow++;
    }
    // nodes
    console.log(this.nodes[this.lowest]);
    delete this.nodes[this.lowest];
    // lowest
    this.lowest++;
  }

  max() {
    console.log(this.maxAry[this.maxLow]);
  }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(5);
queue.push(4);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(5);
// queue.push(6);
// queue.push(5);

// queue.max();
// console.log(queue.head);
console.log(queue);
queue.pop();
console.log(queue.nodes);
console.log(queue.maxAry);
queue.pop();
console.log(queue.nodes);
console.log(queue.maxAry);
queue.pop();
console.log(queue.nodes);
console.log(queue.maxAry);
queue.pop();
console.log(queue.nodes);
console.log(queue.maxAry);
queue.pop();
console.log(queue.nodes);
console.log(queue.maxAry);
queue.pop();
console.log(queue.nodes);
console.log(queue.maxAry);
// queue.max();
