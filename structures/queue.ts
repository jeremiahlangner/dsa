import { assert } from 'assert';

class Node<T> {
  value: T;
  next?: Node<T>;

  constructor(value: T, next?: Node<T>) {
    this.value = value;
    this.next = next;
  }
}

class Queue<T> {
  length: number;
  head?: Node<T>;
  tail?: Node<T>;

  constructor() {
    this.tail = this.head = undefined;
    this.length = 1;
  }

  enqueue(value: T) {
    if (!this.tail) {
      this.tail = this.head = new Node(value);
      this.length = 1;
    } else {
      this.tail.next = new Node(value);
      this.length++;
    }
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    if (!this.head) this.tail = this.head;
    head.next = undefined;

    return head.value;
  }

  peek(): T | undefined {
    if (!this.head) {
      return undefined;
    } else {
      return this.tail!.value;
    }
  }
}

