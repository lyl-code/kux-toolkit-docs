# takeRight <Badge type="tip" text="^1.0.1" />

返回一个数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素。

函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素。

## 签名

```ts
function takeRight<T>(arr : T[], n : number) : T[]
```

## 参数

- `arr`：输入数组。
- `n`：要获取的元素数量。

## 返回值

`T[]`：一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素。

### 示例

```ts
import { takeRight } from '@/uni_modules/kux-toolkit'

console.log(takeRight([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(takeRight(['a', 'b', 'c'], 2)); // ['b', 'c']
console.log(takeRight([1, 2, 3], 5)); // [1, 2, 3]
```
