# unionWith <Badge type="tip" text="^1.0.1" />

使用提供的比较函数来确定相等性，从所有给定的数组中创建一个按顺序的唯一值数组。

函数接受两个数组和一个自定义相等性函数，合并这两个数组，并返回一个新数组，该数组仅包含根据自定义相等性函数确定的唯一值。

## 签名

```ts
function unionWith<T>(arr1 : T[], arr2 : T[], areItemsEqual : (a : T, b : T) => boolean) : T[]
```

## 参数

- `arr1`：第一个数组。
- `arr2`：第二个数组。
- `areItemsEqual`：一个函数，用于确定两个元素是否相等。

## 返回值

`T[]`：一个新数组，仅包含根据自定义相等性函数确定的唯一值。

### 示例

```ts
import { unionWith } from '@/uni_modules/kux-toolkit'

const unionWithArr = unionWith([1, 2, 3], [3, 4, 5], (a, b) : boolean => a == b)
console.log(unionWithArr) // [1, 2, 3, 4, 5]
```
