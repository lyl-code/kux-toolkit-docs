# intersection

计算两个数组的交集。

函数接受两个数组作为参数，返回一个新的数组，其中包含两个数组的交集。

## 签名

```ts
function intersection<T>(firstArr : T[], secondArr : T[]) : T[]
```

## 参数

- `firstArr`(`T[]`)：第一个数组。
- `secondArr`(`T[]`)：第二个数组。

## 返回值

`T[]`：一个新的数组，其中包含两个数组的交集。

### 示例

```ts
import { intersection } from '@/uni_modules/kux-toolkit'

const arr13 = [1, 2, 3, 4, 5]
const arr14 = [4, 5, 6, 7, 8]
const intersectionArr = intersection(arr13, arr14)
console.log(intersectionArr) // [4, 5]
```
