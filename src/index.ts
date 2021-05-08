import { LinkedList as LinkedListClass } from './LinkedListClass'
// import * as LinkedListModule from './LinkedListModule'

/**
 * Linked list class demo.
 */
// const cList = new LinkedListClass();
const cList = new LinkedListClass([3, 11, 'Numb', 22, 'Twenty Two', 11])
console.log(cList.toArray())

cList
  .prepend(111)
  // .log((cList) => cList)
  .append(222)
  // .log((cList) => cList)
  .append('Hello')
  .append(200)
  .append('World')
  .append(3)
  .prepend(200)
  .prepend(200)
  .append(200)
  .append(200)
  .append(200)
  .append(200)
  .log((cList) => cList.toArray())
  .appendAfter(200, 200)
  .log((cList) => cList.toArray())
  .delete(200)
  .log((cList) => cList.toArray())

console.log('----------------------------------------------------------------')

/**
 * Linked list module demo.
 */
// let mList = LinkedListModule.create()

// mList = LinkedListModule.prepend(111)(mList)
// console.log(mList)

// mList = LinkedListModule.prepend(222)(mList)
// console.log(mList)

// mList = LinkedListModule.prepend('Hello')(mList)
// console.log(mList)
