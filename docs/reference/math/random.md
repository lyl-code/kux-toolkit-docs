# random <Badge type="tip" text="^1.0.2" />

生成指定范围内的随机数。该数可以是整数或浮点数。

如果只提供一个参数，则返回一个介于 `0` 到该参数 (不包含该参数) 之间的随机数。如果提供两个参数，则返回一个介于第一个参数 (包含) 到第二个参数 (不包含) 之间的随机数。

## 签名

```ts
function random(min: number): number
function random(min: number, max: number): number
```

## 参数

- `min` (`number`)：随机数的下限 (包含在内)。
- `max` (`number`)：随机数的上限 (不包含在内)。

## 返回值

- (`number`)：一个随机数。

### 示例

```ts
import { random } from '@/uni_modules/kux-toolkit'

const randomResult1 = random(0, 5)
console.log(randomResult1) // 结果为0-5之间的随机数
// 演示最小值大于最大值时会报错
try {
    const randomResult2 = random(5, 0)
    console.log(randomResult2)
} catch (err) {
    console.log(err)
}
// 演示最小值等于最大值时会报错
try {
    const randomResult3 = random(5, 5)
    console.log(randomResult3)
} catch (err) {
    console.log(err)
}
```
