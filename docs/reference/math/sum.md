# sum <Badge type="tip" text="^1.0.2" />

计算一个数字数组的总和。

该函数接受一个数字数组，并返回数组中所有数字的总和。

## 签名

```ts
function sum(nums: number[]): number
```

## 参数

- `nums` (`number[]`)：一个数字数组。

## 返回值

- (`number`)：数组中所有数字的总和。

### 示例

```ts
import { sum } from '@/uni_modules/kux-toolkit'

console.log(sum([1, 2, 3, 4, 5])) // 结果为15
```
