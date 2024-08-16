# last <Badge type="tip" text="^1.0.1" />

返回数组的最后一个元素。

函数接收一个数组作为参数，返回数组的最后一个元素。如果数组为空，则返回 `null`。

## 签名

```ts
function last<T>(arr : T[]) : T | null
```

## 参数

- `arr`(`T[]`)：需要获取最后一个元素的数组。

## 返回值

`T[]`：数组的最后一个元素。如果数组为空，则返回 `null`。

### 示例

```ts
import { last } from '@/uni_modules/kux-toolkit'

console.log(last([1, 2, 3])); // 3
console.log(last([])); // null
// #ifdef WEB
const largeArray = Array(1000)
    .fill(0)
    .map((_, i) : number => i)
console.log(last(largeArray)); // 999
// #endif
const nestedArr = [
    [3, 1],
    [3, 2],
    [3, 3],
]
console.log(last(nestedArr)); // [3, 3]
```
