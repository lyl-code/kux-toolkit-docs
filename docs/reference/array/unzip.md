# unzip <Badge type="tip" text="^1.0.1" />

将一个元素组的数组中相同位置的元素收集起来，并将它们作为一个新数组返回。

函数接受一个数组作为参数，返回一个新的数组，其中包含 `arr` 数组所有列组成的元素数组。

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
