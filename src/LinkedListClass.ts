'use strict'

type LinkEmoji = '➡️' | '🔴'
type OutputNode = [unknown, LinkEmoji]
type OutputArray = OutputNode[]

class LLNode {
  value: unknown
  next: LLNode | null

  constructor(value: unknown, next: LLNode | null) {
    this.value = value
    this.next = next
  }
}

export class LinkedList {
  head: LLNode | null
  tail: LLNode | null

  constructor(arr?: unknown[]) {
    this.head = null
    this.tail = null

    if (arr && arr.length) {
      arr.map ((value) => this.append (value))
    }
  }

  append(value: unknown): LinkedList {
    const newNode = new LLNode (value, null)

    if (this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode

    if (!this.head) {
      this.head = newNode
    }

    return this
  }

  prepend(value: unknown): LinkedList {
    const newNode = new LLNode (value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  find(value: unknown): LLNode | null {
    return LinkedList.findR (this.head, value)
  }

  private static findR(node: LLNode | null, value: unknown): LLNode | null {
    if (!node) {
      return null
    }

    if (node.value === value) {
      return node
    }

    return LinkedList.findR (node.next, value)
  }

  appendAfter(value: unknown, after: unknown): LinkedList {
    LinkedList.appendAfterEachR (this.head, value, after)
    return this
  }

  private static appendAfterEachR(
    node: LLNode | null,
    value: unknown,
    after: unknown,
  ): void {
    if (!node) {
      return
    }

    const foundNode = LinkedList.findR (node, after)

    if (!foundNode) {
      return
    }

    const nextNode = foundNode.next
    foundNode.next = new LLNode (value, nextNode)

    return LinkedList.appendAfterEachR (foundNode.next.next, value, after)
  }

  delete(value: unknown): LinkedList {
    this.deleteFromHeadR (value)
    LinkedList.deleteRestR (this.head, value)

    return this
  }

  private deleteFromHeadR(value: unknown): void {
    if (!this.head || this.head.value !== value) {
      return
    }

    const nextNode = this.head.next
    this.head.next = null
    this.head = nextNode

    return this.deleteFromHeadR (value)
  }

  private static deleteRestR(node: LLNode | null, value: unknown): void {
    if (!node) {
      return
    }

    if (!node.next || node.next.value !== value) {
      return LinkedList.deleteRestR (node.next, value)
    }

    const nextNextNode = node.next.next
    node.next.next = null
    node.next = nextNextNode

    return LinkedList.deleteRestR (node, value)
  }

  toArray(): OutputArray {
    return LinkedList.toArrayR (this.head, [])
  }

  private static toArrayR(node: LLNode | null, arr: OutputArray): OutputArray {
    if (!node) {
      return arr
    }

    return LinkedList.toArrayR (node.next, [
      ...arr,
      [node.value, node.next ? '➡️' : '🔴'],
    ])
  }

  log(fn: (list: LinkedList) => unknown): LinkedList {
    console.log (fn (this))
    return this
  }
}
