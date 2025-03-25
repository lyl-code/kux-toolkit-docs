# divide <Badge type="tip" text="^1.0.4" />

除以两个数字。

如果任意一个数字是`NaN`，函数将返回`NaN`。

## 签名

```ts
function divide(value: number, other: number): number;
```

### 参数

- `value` (`number`):  除法中的第一个数字。
- `other` (`number`): 除法中的第二个数字。

### 返回值

- (`number`): 两个数字的商。

## 示例

```ts
import { divide } from '@/uni_modules/kux-toolkit'

const divideResult1 = divide(6, 3);
console.log(divideResult1); // 结果为2
const divideResult2 = divide(2, NaN);
console.log(divideResult2); // 结果为NaN
const divideResult3 = divide(NaN, 3);
console.log(divideResult3); // 结果为NaN
const divideResult4 = divide(NaN, NaN);
console.log(divideResult4); // 结果为NaN
```
