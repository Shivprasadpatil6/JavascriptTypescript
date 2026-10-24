# Lexicographic Sorting

**Lexicographic order** means sorting items like words in a dictionary: compare them from left to right, one character at a time.

JavaScript's default `Array.sort()` converts values to strings and sorts them lexicographically. That is why numbers can appear in an unexpected order:

```js
[10, 1, 21, 2].sort();
// [1, 10, 2, 21]
```

As strings, `"10"` comes before `"2"` because the first character `"1"` comes before `"2"`.

To sort numbers by their numeric value, use a comparator:

```js
[10, 1, 21, 2].sort((a, b) => a - b);
// [1, 2, 10, 21]
```