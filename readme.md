# Linked List - Pure Functional TypeScript

## Why

I am a big fan of [Elm](https://elm-lang.org/). Ever since I found out about it,
I have been [influenced](https://www.youtube.com/watch?v=CQXu_jFzk_I) by Elm.
Inspired from it, I wanted to try out pure functional style in JavaScript. One
of the most powerful thing I find about Elm is its type system which allows
state to be [modelled very well](https://www.youtube.com/watch?v=IcgmSRJHu_8).
So, I opted for TypeScript instead. And to make it a bit challenging, I wanted
to implement the Linked List data structure.

## Where

Inside the `./src`, you can find `LinkedListClass.ts` and `LinkedListModule.ts`.
As the name suggests, `LinkedListClass.ts` demonstrates the object oriented
implementation, whereas `LinkedListModule.ts` has pure functional
implementation.

One thing to note is I have tried to avoid looping structures like `for` and
`while`, as (a) they are not available in pure functional languages, (b) they
promote mutational logic, and (c) they are imperative instead of declarative.

## Cool, wanna try

You need to have `node`, `npm` and `yarn` installed. After that, in your shell
(bash, zsh, etc.) simply run `yarn && yarn start`. If you get version related
errors, just upgrade to the latest versions. For the specific versions, you can
refer to `package.json`.
