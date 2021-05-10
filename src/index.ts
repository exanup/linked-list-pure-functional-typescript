'use strict'

import {pipe, log, iden} from './LinkedListModule'
import * as LinkedListModule from './LinkedListModule'
import {LinkedList as LinkedListClass} from './LinkedListClass'

/**
 * Linked list class demo.
 */
// const cList = new LinkedListClass ()
const cList = new LinkedListClass ([3, 11, 'Numb', 22, 'Twenty Two', 11])
console.log (cList.toArray ())

cList
  .prepend (111)
  // .log((cList) => cList)
  .append (222)
  // .log((cList) => cList)
  .append ('Hello')
  .append (200)
  .append ('World')
  .append (3)
  .prepend (200)
  .prepend (200)
  .append (200)
  .append (200)
  .append (200)
  .append (200)
  .log ((cList) => cList.toArray ())
  .appendAfter (200, 200)
  .log ((cList) => cList.toArray ())
  .delete (200)
  .log ((cList) => cList.toArray ())

console.log ('---------------------------------------------------------------')

/**
 * Linked list module demo.
 */
// const mList = LinkedListModule.create (null)
const mList = LinkedListModule.create ([3, 11, 'Numb', 22, 'Twenty Two', 11])

pipe (mList) (
  log (iden),
  log (LinkedListModule.toArray),

  LinkedListModule.append (0),
  LinkedListModule.prepend (111),
  LinkedListModule.append (222),
  LinkedListModule.prepend (333),
  LinkedListModule.prepend (333),
  LinkedListModule.append (444),
  LinkedListModule.append (333),
  LinkedListModule.append (333),
  LinkedListModule.append (333),
  LinkedListModule.appendAfter (999) (333),
  LinkedListModule.appendAfter (999) (0),
  log (LinkedListModule.toArray),

  LinkedListModule.deleteItem (333),
  log (LinkedListModule.toArray),

  LinkedListModule.deleteItem (999),
  log (LinkedListModule.toArray),
)
