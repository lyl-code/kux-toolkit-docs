# subtract <Badge type="tip" text="^1.0.4" />

返回两个数字的差值的函数。

如果其中一个数字是 `NaN`，则返回 `NaN`。

## 签名

```ts
function subtract(value: number, other: number): number;
```

### 参数

- `value` (number): 被减数。
- `other` (number): 减数。

### 返回值

- (`number`): 两个数字的差值。如果其中一个数字是 `NaN`，则返回 `NaN`。

## 示例

```ts
import { subtract } from '@/uni_modules/kux-toolkit';

const subtractResult1 = subtract(2, 3);
console.log(subtractResult1); // 结果=-1
const subtractResult2 = subtract(2, -3);
console.log(subtractResult2); // 结果=5
const subtractResult3 = subtract(NaN, 5);
console.log(subtractResult3); // 结果=NaN
```
