# multiply <Badge type="tip" text="^1.0.4" />

将两个数字相乘。

如果任意一个值是 `NaN`，则返回 `NaN`。

## 签名

```ts
function multiply(value: number, other: number): number
```

### 参数

- `value` (number): 第一个数字。
- `other` (number): 第二个数字。

### 返回值

- (`number`): 两个数字相乘的结果。如果任意一个值是 `NaN`，则返回 `NaN`。

## 示例

```ts
import { multiply } from '@/uni_modules/kux-toolkit'

const multiplyResult1 = multiply(2, 3);
console.log(multiplyResult1); // 结果为6
const multiplyResult2 = multiply(2, -3);
console.log(multiplyResult2); // 结果=-6
const multiplyResult3 = multiply(NaN, 5);
console.log(multiplyResult3); // 结果=NaN
```
