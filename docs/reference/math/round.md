# round <Badge type="tip" text="^1.0.2" />

将一个数字四舍五入到指定的精度。

该函数接受一个数字和一个可选的精度值，并返回该数字四舍五入到指定的小数位数的结果。

## 签名

```ts
function round(value: number, precision?: number): number
```

## 参数

- `value` (`number`)：要四舍五入的数字。
- `precision` (`number`)：要保留的小数位数。如果省略，则默认为 `0`。

## 返回值

- (`number`)：四舍五入后的数字。

### 示例

```ts
import { round } from '@/uni_modules/kux-toolkit'

console.log(round(1.2345)) // 结果为1
console.log(round(1.2345, 2)) // 结果为1.23
console.log(round(1.2345, 3)) // 结果为1.235
// 演示精度值不是整数时会报错
try {
    console.log(round(1.2345, 3.1));
} catch (err) {
    console.log(err)
}
```
