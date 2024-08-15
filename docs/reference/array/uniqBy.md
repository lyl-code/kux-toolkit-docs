# uniqBy <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `iteratee` 函数对每个元素进行处理，以确定它们是否相等。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `iteratee` 函数对每个元素进行处理。

## 签名

```ts
function uniqBy<T, K>(arr : T[], iteratee : (item : T) => K) : T[]
```

## 参数

- `arr`：`T[]` 类型，输入数组。
- `iteratee`：`(item : T) => K` 类型，一个函数，用于对数组元素进行处理，以确定它们是否相等。

## 返回值

`T[]`：一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `iteratee` 函数对每个元素进行处理。

### 示例

```ts
import { uniqBy } from '@/uni_modules/kux-toolkit'

console.log(uniqBy([1.2, 1.5, 2.1, 3.2, 3.7, 5.3, 7.19], (item) : number => Math.floor(item))); 
// [1.2, 1.5, 2.1, 3.2, 3.7, 5.3, 7.19]
```
