import assert from 'assert';

class Node<T> {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;

  constructor(
    value: T, 
    prev?: Node<T>, 
    next?: Node<T>) {
      this.value = value;
      this.prev = prev;
      this.next = next;
  }
}

class LinkedList<T> {
  length: number;
  head?: Node<T>;
  tail?: Node<T>;

  constructor(head: Node<T>) {
    this.head = head;

    this.length = 1;
    let node = this.head;
    while (node.next) {
      node = node.next;
      this.length++;
    }

    this.tail = node;
  }

  getAt(index: number): Node<T> | undefined {
    let i = 0;
    let node: Node<T> | undefined = this.head;
    while(node) {
      if (i === index) return node;
      node = node.next;
      i++;
    }
    return undefined;
  }

  append(value: T): T {
    const node = new Node(value, this.tail);
    if (this.tail) this.tail.next = node;
    if (!this.head) this.head = node;
    this.tail = node;
    this.length++;
    return value;
  }

  prepend(value: T): T {
    const node = new Node(value, undefined, this.head);
    if (this.head) this.head.prev = node;
    if (!this.tail) this.tail = node;
    this.head = node;
    this.length++;
    return value;
  }
  
  insertAt(index: number, value: T): T {
    const n = new Node(value);
    const old = this.getAt(index);
    if (old) {
      if (old.prev) {
        old.prev.next = n;
        n.prev = old.prev;
        old.prev = n;
        n.next = old;
        this.length++;
      } else {
        old.prev = n;
        n.next = old;
        this.head = n;
        this.length++;
      }
    } else {
      if (this.length > 0 && index > this.length) {
        this.append(n.value);
      } else {
        this.head = n;
        this.tail = n;
        this.length = 1;
      }
    }
    return value;
  }

  delete(node: Node<T>): void {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    if (!node.next) this.tail = node.prev;
    if (!node.prev) this.head = node.next;

    node.next = undefined;
    node.prev = undefined;

    this.length--;
  }

  deleteAt(index: number): void {
    const node = this.getAt(index);
    if (node) this.delete(node);
  }

  search(value: T): Node<T> | undefined {
    let node: Node<T> | undefined = this.head;
    while (node) {
      if (node.value === value) return node;
      node = node.next;
    }
    return undefined;
  }
}

const head = new Node(5);
const list = new LinkedList(head);
list.append(6);
list.append(7);

assert(list.getAt(2) === list.tail);
list.delete(list.tail!);
assert(list.tail!.value === 6);
