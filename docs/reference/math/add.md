# add <Badge type="tip" text="^1.0.4" />

将两个数字相加。

## 签名
```ts
function add(value: number, other: number): number;
```

### 参数
- `value` (number): 第一个数字。
- `other` (number): 第二个数字。

### 返回值
- (number): 两个数字的和。

## 示例
```ts
import { add } from '@/uni_modules/kux-toolkit';

const addResult1 = add(2, 3)
console.log(addResult1) // 结果为5
const addResult2 = add(2, -3)
console.log(addResult2) // 结果为-1
const addResult3 = add(NaN, 5);
console.log(addResult3) // 结果为NaN
```
