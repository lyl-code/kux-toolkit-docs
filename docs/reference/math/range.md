# range <Badge type="tip" text="^1.0.2" />

返回一个从 `start` 到 `end` 的数字数组，步长为 `step`。

如果未提供 `step`，则默认为 `1`。注意，`step` 必须是一个非零整数。

## 签名

```ts
function range(end: number): number[]
function range(start: number, end: number): number[]
function range(start: number, end: number, step: number): number[]
```

## 参数

- `start` (`number`)：起始值，默认为 `0`。
- `end` (`number`)：结束值。
- `step` (`number`)：步长，默认为 `1`。

## 返回值

- (`number[]`)：一个从 `start` 到 `end` 的数字数组，步长为 `step`。

### 示例

```ts
import { range } from '@/uni_modules/kux-toolkit'

console.log(range(4)) // [0, 1, 2, 3]
console.log(range(0, 20, 5)) // [0, 5, 10, 15]
console.log(range(0, 21, 5)) // [0, 5, 10, 15, 20]
console.log(range(0, -4, -1)) // [0, -1, -2, -3]
// 演示步长为 0 时会报错
try {
    console.log(range(1, 4, 0));
} catch (err) {
    console.log(err);
}
```
