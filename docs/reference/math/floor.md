# floor <Badge type="tip" text="^1.0.4" />

将一个数字向下舍入到指定的精度。

该函数接受一个数字和一个可选的精度值，返回将数字向下舍入到指定小数位数的结果。

## 签名

```ts
function floor(number: number | string, precision: number | string = 0): number
```

### 参数

- `number`(`number | string`): 要向下舍入的数字。
- `precision`(`number | string`, 可选): 要向下舍入的精度，默认为 `0`。

### 返回值

- `number`: 向下舍入后的数字。

## 示例

```ts
import { floor } from '@/uni_modules/kux-toolkit'

const floorResult1 = floor(4.006);
console.log(floorResult1) // 结果为4
const floorResult2 = floor(0.046, 2);
console.log(floorResult2) // 结果为0.04
const floorResult3 = floor(4060, -2);
console.log(floorResult3) // 结果为4000
```


