# randomInt <Badge type="tip" text="^1.0.2" />

生成指定范围内的随机整数。

如果只提供一个参数，则返回一个介于 `0` 到该参数 (不包含该参数) 之间的随机整数。如果提供两个参数，则返回一个介于第一个参数 (包含) 到第二个参数 (不包含) 之间的随机整数。

## 签名

```ts
function randomInt(min: number): number
function randomInt(min: number, max: number): number
```

## 参数

- `min` (`number`)：随机数的下限 (包含在内)。
- `max` (`number`)：随机数的上限 (不包含在内)。

## 返回值

- (`number`)：一个随机数。

### 示例

```ts
import { randomInt } from '@/uni_modules/kux-toolkit'

const randomIntResult1 = randomInt(0, 5)
console.log(randomIntResult1) // 返回一个在 0 到 5 之间的随机整数
// 演示最小值大于最大值时会报错
try {
    const randomIntResult2 = randomInt(5, 0)
    console.log(randomIntResult2)
} catch (err) {
    console.log(err)
}
// 演示最小值等于最大值时会报错
try {
    const randomIntResult3 = randomInt(5, 5)
    console.log(randomIntResult3)
} catch (err) {
    console.log(err)
}
```
