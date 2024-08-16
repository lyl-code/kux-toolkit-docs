# head <Badge type="tip" text="^1.0.1" />

返回数组的第一个元素。

该函数接收一个数组作为参数，返回数组的第一个元素。如果数组为空，则返回 `null`。

## 签名

```ts
function head<T>(arr : T[]) : T | null
```

## 参数

- `arr`(`T[]`)：需要获取第一个元素的数组。

## 返回值

`T | null`：返回数组的第一个元素。如果数组为空，则返回 `null`。

### 示例

```ts
import { head } from '@/uni_modules/kux-toolkit'

console.log(head([1, 2, 3])); // 1
console.log(head([])); // null
console.log(head(['a', 'b', 'c'])); // 'a'
console.log(head([true, false, true])); // true
console.log(head([1, 'a', true])); // 1
```
