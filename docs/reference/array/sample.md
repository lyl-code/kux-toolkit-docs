# sample <Badge type="tip" text="^1.0.1" />

返回数组中的随机元素。

函数接受一个数组作为参数，返回数组中的随机元素。空数组返回 `null`。

## 签名

```ts
function sample<T>(arr : T[]) : T | null
```

## 参数

- `arr`(`T[]`)：要查找的数组。

## 返回值

`T[]`：数组中的随机元素。

### 示例

```ts
import { sample } from '@/uni_modules/kux-toolkit'

const arr18 = [1, 2, 3, 4, 5]
const sampleItem = sample(arr18)
console.log(sampleItem) // 1, 2, 3, 4, 5 中的随机元素
```
