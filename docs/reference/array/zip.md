# zip <Badge type="tip" text="^1.0.1" />

将多个数组组合成一个元组数组，返回一个新的数组，其中包含两个数组的对称差集，使用提供的相等性函数来确定相等性。

函数接受多个数组作为参数，返回一个新的数组，其中每一个元素都是一个元组， 包含输入数组的对应元素。如果数组长度不同，结果数组的长度将是最长数组的长度，缺失的值将是 `null`。

## 签名

```ts
function zip<T>(...arrs : T[][]) : T[][]
```

## 参数

- `...arrs`(`T[][]`)：多个数组，每个数组的元素类型必须相同。

## 返回值

`T[][]`：一个新的数组，其中每一个元素都是一个元组， 包含输入数组的对应元素。如果数组长度不同，结果数组的长度将是最长数组的长度，缺失的值将是 `null`。

### 示例

```ts
import { zip } from '@/uni_modules/kux-toolkit'

type AnyNullArray = any | null
const arr23 = [1, 2, 3] as AnyNullArray[]
const arr24 = ['a', 'b', 'c'] as AnyNullArray[]
const zipArr = zip(arr23, arr24)
console.log(zipArr) // [[1, 'a'], [2, 'b'], [3, 'c']]
const arr25 = [true, false] as AnyNullArray[]
console.log(zip(arr23, arr24, arr25)); // [[1, 'a', true], [2, 'b', false], [3, 'c', null]]
```
