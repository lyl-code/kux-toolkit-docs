# min

找到数组中的最小元素，并返回该元素的值。如果数组为空，则返回 `null`。

函数接受一个数组作为参数，返回数组中的最小元素，并返回该元素的值。如果数组为空，则返回 `null`。

## 签名

```ts
function min<T>(arr : T[]) : T | null
```

## 参数

- `arr`(`T[]`)：需要查找最小元素的数组。

## 返回值

`T | null`：数组中的最小元素，如果数组为空，则返回 `null`。

### 示例

```ts
import { min } from '@/uni_modules/kux-toolkit'

console.log(min([1, 2, 3])); // 1
console.log(min(['a', 'b', 'c'])); // 'a'
```
