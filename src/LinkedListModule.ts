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
): TLinkedList => (!head ? list : prependMany(tail)(prepend(head)(list)))

export const prepend = (value: Readonly<unknown>) => (
  list: TLinkedList,
): TLinkedList => ({ head: value, tail: list })

export const append = (value: Readonly<unknown>) => (
  list: TLinkedList,
): TLinkedList =>
  !list
    ? prepend(value)(list)
    : { head: list.head, tail: append(value)(list.tail) }

export const toArray = (list: TLinkedList) => toArrayR([])(list)

const toArrayR = (arr: unknown[]) => (list: TLinkedList): unknown[] =>
  !list ? arr : toArrayR([...arr, list.head])(list.tail)

export const pipe = (arg: any) => (
  ...[hdFn, ...tlFns]: OneOrMoreRO<Function>
) =>
  !hdFn ? undefined : tlFns.reduce((lastValue, fn) => fn(lastValue), hdFn(arg))

export const log = (fn: Function) => (item: any) => (
  console.log(fn(item)), item
)

export const iden = (x: any) => x
