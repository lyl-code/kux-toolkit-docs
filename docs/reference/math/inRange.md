# inRange <Badge type="tip" text="^1.0.2" />

检查值是否在指定范围内。

该函数接受一个数字和两个边界，并返回一个布尔值，指示数字是否在指定范围内。

## 签名

```ts
function inRange(value: number, min: number): boolean
function inRange(value: number, min: number, max: number): boolean
```

## 参数

- `value`(`number`)：要检查的值。
- `min`(`number`)：范围的下限 (包含在内)。
- `max`(`number`)：范围的上限 (不包含在内)。

## 返回值

- `boolean`：如果 `value` 在 `min` 和 `max` 之间，则返回 `true`，否则返回 `false`。

### 示例

```ts
import { inRange } from '@/uni_modules/kux-toolkit'

console.log(inRange(3, 5)); // true
console.log(inRange(1, 2, 5)); // false
// 演示最小值大于最大值时会报错
try {
    console.log(inRange(1, 5, 2));
} catch (err) {
    console.log(err);
}
```
