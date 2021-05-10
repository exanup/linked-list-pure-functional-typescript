type TLinkEmoji = '➡️' | '🔴'
type TOutputNode = Readonly<[unknown, TLinkEmoji]>
type TOutputArray = Readonly<TOutputNode[]>

type None = null
type Maybe<T> = Readonly<T> | None
type OneOrMore<T> = Readonly<[T, ...T[]]>

type Unknown = Readonly<unknown>

type TLinkedList = Maybe<{
  head: Unknown
  tail: Maybe<TLinkedList>
}>

type TLinkedListArray = Readonly<Unknown[]>
type TMaybeLinkedListArray = Maybe<TLinkedListArray>

export const create = (arr: TMaybeLinkedListArray): TLinkedList =>
  arr?.length ? prependMany([...arr].reverse())(null) : null

const prependMany = ([head, ...tail]: TLinkedListArray) => (
  list: TLinkedList,
): TLinkedList => (!head ? list : prependMany(tail)(prepend(head)(list)))

export const prepend = (value: Unknown) => (
  list: TLinkedList,
): TLinkedList => ({ head: value, tail: list })

export const append = (value: Unknown) => (list: TLinkedList): TLinkedList =>
  !list ? prepend(value)(list) : { ...list, tail: append(value)(list.tail) }

export const appendAfter = (value: Unknown) => (before: Unknown) => (
  list: TLinkedList,
): TLinkedList => {
  return !list
    ? list
    : before === list.head
    ? {
        ...list,
        tail: appendAfter(value)(before)({ head: value, tail: list.tail }),
      }
    : { ...list, tail: appendAfter(value)(before)(list.tail) }
}

export const deleteItem = (value: Unknown) => (
  list: TLinkedList,
): TLinkedList =>
  !list
    ? list
    : value === list.head
    ? deleteItem(value)(list.tail)
    : { ...list, tail: deleteItem(value)(list.tail) }

export const toArray = (list: TLinkedList) => toArrayR([])(list)

const toArrayR = (arr: TOutputArray) => (list: TLinkedList): TOutputArray =>
  !list
    ? arr
    : toArrayR([...arr, [list.head, list.tail ? '➡️' : '🔴']])(list.tail)

/**
 * Utilities -------------------------------------------------------------------
 */

export const pipe = (arg: any) => (...[hdFn, ...tlFns]: OneOrMore<Function>) =>
  tlFns.reduce((lastValue, fn) => fn(lastValue), hdFn(arg))

export const log = (fn: Function) => (item: any) => (
  console.log(fn(item)), item
)

export const iden = (x: any) => x
