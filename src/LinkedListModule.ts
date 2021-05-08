type TLinkEmoji = '➡️' | '🔴'
type TOutputNode = Readonly<[unknown, TLinkEmoji]>
type TOutputArray = Readonly<TOutputNode[]>

type None = null
type Maybe<T> = Readonly<T> | None
type OneOrMore<T> = [T, ...T[]]
type OneOrMoreRO<T> = Readonly<OneOrMore<T>>

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
): TLinkedList => {
  if (!head) return list

  return prependMany(tail)(prepend(head)(list))
}

export const prepend = (value: Readonly<unknown>) => (
  list: TLinkedList,
): TLinkedList => {
  return { head: value, tail: list }
}

export const toArray = (list: TLinkedList) => {
  return toArrayR([])(list)
}

const toArrayR = (arr: unknown[]) => (list: TLinkedList): unknown[] => {
  if (!list) {
    return arr
  }

  return toArrayR([...arr, list.head])(list.tail)
}

export const pipe = (arg: any) => (
  ...[hdFn, ...tlFns]: OneOrMoreRO<Function>
) => {
  if (!hdFn) {
    return
  }

  return tlFns.reduce((lastValue, fn) => fn(lastValue), hdFn(arg))
}

export const log = (fn: Function) => (item: any) => (
  console.log(fn(item)), item
)

export const iden = (x: any) => x
