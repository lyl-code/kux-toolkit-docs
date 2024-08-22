# clamp <Badge type="tip" text="^1.0.2" />

将一个数字限制在指定的包含边界内。

该函数接受一个数字和两个边界，并返回将数字限制在指定边界内的结果。如果数字小于第一个边界，则返回第一个边界；如果数字大于第二个边界，则返回第二个边界；否则返回数字本身。

## 签名

```ts
function clamp(value: number, min: number): number
function clamp(value: number, min: number, max: number): number
```

## 参数

- `value`(`number`)：要限制的数字。
- `min`(`number`)：最小值。
- `max`(`number`)：最大值。

## 返回值

- `number`：如果 `value` 小于 `min`，则返回 `min`，如果 `value` 大于 `max`，则返回 `max`，否则返回 `value`。

### 示例

```ts
import { clamp } from '@/uni_modules/kux-toolkit'

console.log(clamp(10, 5)); // 结果为5，因为 10 被限制在边界 5 上
console.log(clamp(10, 5, 15)); // 结果为10，因为 10 已经在边界 5 和 15 之间了
console.log(clamp(2, 5, 15)); // 结果为5，因为 2 被限制在较低边界 5 上
console.log(clamp(20, 5, 15)); // 结果为15，因为 20 被限制在较高边界 15 上
```
