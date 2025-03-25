# ceil <Badge type="tip" text="^1.0.4" />

将一个数字向上舍入到指定的精度。

该函数接受一个数字和一个可选的精度值，返回将数字向上舍入到指定小数位数的结果。

## 签名

```ts
function ceil(num: number | string, precision?: number | string = 0): number
```

### 参数

- `num` (`number | string`): 要舍入的数字。
- `precision` (`number | string`, 可选): 要向上舍入的精度。默认为 `0`。

### 返回值

- (`number`): 向上舍入的数字。

## 示例

```ts
import { ceil } from '@/uni_modules/kux-toolkit';

const ceilResult1 = ceil(4.006);
console.log(ceilResult1) // 结果为5
const ceilResult2 = ceil(6.004, 2);
console.log(ceilResult2) // 结果为6.01
const ceilResult3 = ceil(6040, -2); // 结果为6100
console.log(ceilResult3)
```
