# sampleSize <Badge type="tip" text="^1.0.1" />

从数组中随机选取指定数量的元素。

函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含从数组中随机选取指定数量的元素。

## 签名

```ts
function sampleSize<T>(arr : T[], n : number) : T[]
```

## 参数

- `arr`(`T[]`)：要查找的数组。
- `n`(`number`)：要随机选取的元素数量。

## 返回值

`T[]`：一个新的数组，其中包含从数组中随机选取指定数量的元素。

### 示例

```ts
import { sampleSize } from '@/uni_modules/kux-toolkit'

const result = sampleSize([1, 2, 3], 2);
// 结果将是一个包含数组中两个元素的数组。
// [1, 2] 或者 [1, 3] 或者 [2, 3]
```
