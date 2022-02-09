# Reacts Version of Memo and When To Use It

| Topics Covered                 |
| ------------------------------ |
| 1. What is memoization really? |
| 2. Why is react different?     |
| 3. When should you use memo?   |
| 4. How should you "useMemo"?   |
| 5. What about useCallback?     |

> "...memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."

> "...related to caching, memoization refers to a specific case of this optimization, distinguishing it from forms of caching such as buffering or page replacement."

> "Memoization is a technique for improving the performance of recursive algorithms. It involves rewriting the recursive algorithm so that as answers to problems are found, they are stored in an array. Recursive calls can look up results in the array rather than having to recalculate them."

```typescript
// Memo example with factorial

/**
 * With the function above there a a cost for every step
 * You have to compare to 0 twice then you have a
 * recursive call to factorial that only satisfies once
 * n has been reduced to 0, and then each recursively
 * called function must return a product with the
 * original number supplied.
 */
function factorial(n: number) {
  if (n < 0) return; // Negatives not allowed
  if (n === 0) return 1;
  return factorial(n - 1) * n;
}

// 2 1 1 ==> 3*1*1*2 = 6
console.log(factorial(3));
// 4 3 2 1 1 ==> 5*1*1*2*3*4 = 120
console.log(factorial(5));

/**
 * The expensive computation is reduced in time spent
 * calculating by the fact that a record of previously
 * computed values are held for reference. Any value
 * equal to or less than the previously used number will
 * be found quickly because it's value has already been
 * stored.
 */
function memoizedFactorial(n: number) {
  if (n < 0) return; // Negatives not allowed
  const cache = new Map<number, number>();
  if (cache.has(n)) return cache.get(n);
  if (n === 0) return 1;
  const result = memoizedFactorial(n - 1) * n;
  cache.set(n, result);
  return result;
}
```

Memoization is tool a developer can use to keep a _cached reference_ to a value or many values, in order to improve performance when calling for that same result. It is best used with reference type values such as objects, arrays, and functions.

In lodash, values to be referenced are stored in some sort of object or array for comparison later. Meaning it creates a functions that "remembers" previous values and if any of those values are called, the cached value is returned rather than having to go and compute for the value elsewhere.

> "A function can only be memoized if it is referentially transparent; that is, only if calling the function has exactly the same effect as replacing that function call with its return value."

However, with react memoization is a bit different in that in does a shallow comparison, expects primitive values, and only compares previous to next. As _Jack Harrington_ put it, "...render if the props have changed".

```typescript
// React Memo

interface Memo {
    value: any;
    result: any;
}

const memo: Memo = { // Holds previous
    value: null;
    result: null;
}


// From Rect source code
function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean
    ): MemoExoticComponent<T>;

/* Another way */
function reactMemo(value: any, callback: () => void) {
    if (value === store.value) return store.result;
    store.value = value;
    store.result = callback(value);
    return store.result;
}
```

Here's what happens: Say you have some state that forces a rerender of your app -- like a button changes some value. Other components nested within the component being rerendered will follow suit. That means they will rerender as well if they are receiving any props.

You can use memo to say unless the props have changed for the nested component, don't rerender. Therefore, it works best when the props remain consistent. If you use it for something like a toggle value that changes often, memo is not cost effective and adds unnecessary overhead. If values will be locked in, use memo. If values will change often, don't use memo.

React's memo is also instance specific.

For handling more complex data structures, i.e. reference types, you could either pass in a second function to `React.memo` OR `useMemo` and pass it a function that returns your object, and only rerenders when it's dependencies have not changed. Used for objects and arrays.

## useCallback

If any child components carry a function that does not change in value or does the same thing given the same props, `useCallback` can be used to avoid rerenders recreating the function. Used for functions.

### Recommended Resources

[Master React Memo with Jack Herrington](https://www.youtube.com/watch?v=DEPwA3mv_R8)
Great visual demonstrations of what memo actually does. Highly suggest hearing what he as to say about not worrying about React rerendering so much.
