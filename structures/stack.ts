import assert from 'assert';

class Node<T> {
  value: T;
  next?: Node<T>;

  constructor(value: T, next?: Node<T>) {
    this.value = value;
    this.next = next;
  }
}

class Stack<T> {
  root?: Node<T>;

  constructor(node?: Node<T>) {
    this.root = node;
  }

  push(value: T): T {
    const node = new Node(value);
    if (this.root) {
      const tmp = this.root;
      this.root = node;
      node.next = tmp;
    } else {
      this.root = node;
    }
    return value;
  }

  pop(): T | undefined {
    const tmp = this.root;
    this.root = this.root?.next; 
    return tmp?.value;
  }

  peek(): T | undefined {
    return this.root?.value;
  }

  size(): number {
    if (!this.root) return 0;
    let node = this.root;
    let count = 1;
    while (node!.next) {
      node = node.next;
      count++;
    }
    return count;
  }
}

const stack = new Stack(new Node(5));
stack.push(6);
assert(stack.peek() === 6);
assert(stack.pop() === 6);
assert(stack.peek() === 5);
assert(stack.size() === 1);
