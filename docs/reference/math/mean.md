# mean <Badge type="tip" text="^1.0.2" />

计算数字数组的平均值。

该函数接受一个数字数组，并返回数组中所有数字的平均值。如果数组为空，则返回 `NaN` 。

## 签名

```ts
function mean(nums: number[]): number
```

## 参数

- `nums`：一个数字数组。

## 返回值

- (`number`)：数组中所有数字的平均值。

### 示例

```ts
import { mean } from '@/uni_modules/kux-toolkit'

const numbers = [1, 2, 3, 4, 5]
const result = mean(numbers)
console.log(result) // 结果为3
```
