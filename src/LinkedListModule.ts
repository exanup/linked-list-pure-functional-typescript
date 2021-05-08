type TLinkEmoji = '➡️' | '🔴'
type TOutputNode = [unknown, TLinkEmoji]
type TOutputArray = TOutputNode[]

interface TLinkedList {
  head: Readonly<unknown | undefined>
  tail: Readonly<TLinkedList | null>
}

export const create = (arr?: unknown[]): TLinkedList =>
  arr?.length ? prependMany(arr)(null) : { head: undefined, tail: null }

const prependMany = ([head, ...tail]: unknown[]) => (
  list: TLinkedList,
): TLinkedList => {
  if (!head) return list

  return prependMany(tail)(prepend(head)(list))
}

export const prepend = (value: unknown) => (list: TLinkedList): TLinkedList => {
  // console.log("-----------------------------------------------------------");
  // console.log(`prepending ${value} to`, list);
}
