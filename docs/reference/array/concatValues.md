# concat

将多个值合并成一个数组。

函数接受多个值作为参数，返回一个新的数组，其中包含所有传入的值的元素。

::: warning 注意
+ 由于 `uts` 类型系统的限制，该函数只能合并多个字面量值，不能合并其他类型的值。
+ 如果是多个数组的需求，可以使用 [concat](./concat.md) 函数。
  :::

## 签名

```ts
function concatValues<T>(...values: T[]): T[]
```

## 参数

+ `values`(`...T[])`)：要合并的值。

## 返回值

`T[]`：一个新的数组，其中包含所有传入的值的元素。

### 示例

```ts
import { concatValues } from '@/uni_modules/kux-toolkit'

// 连接值的数组
concat(1, 2, 3, 4);
// 返回 [1, 2, 3, 4]
```
