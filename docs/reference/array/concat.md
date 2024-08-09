# concat

将多个数组合并成一个数组。

函数接受多个数组作为参数，返回一个新的数组，其中包含所有传入的数组的元素。

::: warning 注意
+ 由于 `uts` 类型系统的限制，该函数只能合并数组，不能合并其他类型的值。
+ 如果是合并值的需求，可以使用 [concatValues](./concatValues.md) 函数。
:::

## 签名

```ts
function concat<T>(...arrs: T[][]): T[]
```

## 参数

+ `arrs`(`...T[][]`)：要合并的数组。

## 返回值

`T[]`：一个新的数组，其中包含所有传入的数组的元素。

### 示例

```ts
import { concat } from '@/uni_modules/kux-toolkit'

// 连接值的数组
concat([1, 2], [3, 4]);
// 返回 [1, 2, 3, 4]
```
