import assert from "node:test";

type Letter<N extends number> = {
  0: string,
  length: N,
} & string;

type TrieNode = {
  [l: Letter<1>]: TrieNode | null,
  terminal?: boolean,
};

export default class Trie {
  root: TrieNode = {};

  insert(word: string) {
    let node = this.root;
    for (const letter of word) {
      if (!node[letter]) node[letter] = {};
      node = node[letter];
    }
    node.terminal = true;
  }

  search(word: string) {
    let node = this.root;
    for (const letter of word) {
      if (!node[letter]) return false;
      node = node[letter];
    }
    return node.terminal;
  }

  startsWith(word: string) {
    let node = this.root;
    for (const letter of word) {
      if (!node[letter]) return false;
      node = node[letter];
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("hello");
trie.insert("world");
assert(trie.search("hello") === true);
assert(trie.search("world") === true);
