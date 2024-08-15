# unzipWith <Badge type="tip" text="^1.0.1" />

将一个嵌套的数组解压缩，并对重新分组的元素应用一个 `iteratee` 函数。

函数接受一个数组和一个函数作为参数，实现把 `arr` 数组中元素按照 `iteratee` 函数的返回值进行分组，并返回一个新的数组。

## 签名

```ts
function unzip<T>(arr : T[][]) : T[][]
```

## 参数

- `arr`：一个数组，其中包含 `T` 类型元素的数组。

## 返回值

`T[][]`：一个数组，其中包含 `T` 类型元素的数组。

### 示例

```ts
import { unzip } from '@/uni_modules/kux-toolkit'

console.log(unzip([['a', true, 1], ['b', false, 2]])); // [['a', 'b'], [true, false], [1, 2]]
```
