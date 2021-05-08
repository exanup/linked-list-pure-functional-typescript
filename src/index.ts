import { pipe, log, iden } from './LinkedListModule'
import * as LinkedListModule from './LinkedListModule'
// import { LinkedList as LinkedListClass } from './LinkedListClass'

/**
 * Linked list class demo.
 */
// const cList = new LinkedListClass();
// const cList = new LinkedListClass([3, 11, 'Numb', 22, 'Twenty Two', 11])
// console.log(cList.toArray())

// cList
//   .prepend(111)
//   // .log((cList) => cList)
//   .append(222)
//   // .log((cList) => cList)
//   .append('Hello')
//   .append(200)
//   .append('World')
//   .append(3)
//   .prepend(200)
//   .prepend(200)
//   .append(200)
//   .append(200)
//   .append(200)
//   .append(200)
//   .log((cList) => cList.toArray())
//   .appendAfter(200, 200)
//   .log((cList) => cList.toArray())
//   .delete(200)
//   .log((cList) => cList.toArray())

console.log('-----------------------------------------------------------------')

/**
 * Linked list module demo.
 */
// let mList = LinkedListModule.create(null)
let mList = LinkedListModule.create([3, 11, 'Numb', 22, 'Twenty Two', 11])

pipe(mList)(
  log(LinkedListModule.toArray),
  LinkedListModule.prepend(111),
  log(LinkedListModule.toArray),
  LinkedListModule.prepend(222),
  log(LinkedListModule.toArray),
  LinkedListModule.prepend(333),
  log(LinkedListModule.toArray),
)
