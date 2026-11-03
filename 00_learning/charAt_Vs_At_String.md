# `charAt()` vs `at()` for Strings

Both methods return a character from a string by index. Their main difference is how they handle negative and out-of-range indexes.

| Behavior | `charAt(index)` | `at(index)` |
|---|---|---|
| Index `0` | Returns the first character | Returns the first character |
| Positive index | Counts from the start | Counts from the start |
| Negative index | Does not count from the end; returns `''` | Counts backward from the end |
| Index out of range | Returns `''` | Returns `undefined` |
| Availability | Widely supported in older JavaScript environments | Added in ES2022 |

## Examples

```js
const text = "abc";

console.log(text.charAt(0)); // "a"
console.log(text.at(0));     // "a"

console.log(text.charAt(-1)); // ""
console.log(text.at(-1));     // "c"

console.log(text.charAt(3)); // ""
console.log(text.at(3));     // undefined
```

`at(-1)` accesses the last character, `at(-2)` the second-to-last, and so on. Both methods use UTF-16 code-unit indexes, so neither should be assumed to return a whole Unicode character in every case.
