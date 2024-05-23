type Node<T> = {
  value: T
  next?: Node<T>;
}

export class RingBuffer<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  size: number;


  constructor() {
    this.head = this.tail = undefined;
    

  }

  shift(): Node<T> | undefined {
    const tmp = this.head;
    
    this.head = this.head?.next;

    // TODO: handle index/size logic
    return tmp;
  }

  unshift(): Node<T> | undefined {
    const tmp = this.tail;

    // traverse to tail? (keeping a prev on tail would be faster.

    // TODO: handle index/size logic
    return tmp;
  }

  // if expands beyond length of buffer, append necessary length to resize.
  resize(): void {
  }
  
}
