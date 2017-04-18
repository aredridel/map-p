map-p
============

Map over an (eventual) list of promises

```
map(list: Promise<Array<any>>|Array<any>, mapper: Function(any, int) -> Promise<any>|Any) -> Promise<Array<any>>
```

Explanation
-----------

This module is written to encourage a style focusing on promises as eventual
values rather than as flow control, and to show the dependency between values
rather than the dependency between functions, encouraging decoupling of
functions that don't need to be coupled.

This is much like Bluebird's `map` function, though it does not have the
concurrency controls.

It resolves its parameters, so it can both take an eventual list, and deal with
eventual values in the list.

Use
---

The identity transform:

```
map(list, (e, i) => e)
```

A more complete example showing eventual values:

```
const listP = Promise.resolve([1, 2, Promise.resolve(3)])
const mapped = map(listP, e => {
    e * 2
})

mapped.then(console.warn)
```

This prints `[2, 4, 6]`, having handled both the promise of an array and a
promise of one of the values in the list.
