# uniqWith <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `comparator` 函数对每个元素进行比较。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `comparator` 函数对每个元素进行比较。

## 签名

```ts
function uniqWith<T>(arr : T[], areItemsEqual : (a : T, b : T) => boolean) : T[]
```

## 参数

- `arr`：一个数组。
- `areItemsEqual`：一个函数，用于比较两个元素是否相等。

## 返回值

`T[]`：一个数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `comparator` 函数对每个元素进行比较。

### 示例

```ts
import { uniqWith } from '@/uni_modules/kux-toolkit'

console.log(uniqWith([1.2, 1.5, 2.1, 3.2, 5.7, 5.3, 7.19], (a, b) : boolean => Math.abs(a - b) < 1));
// [1.2, 3.2, 5.7, 7.19]
```
