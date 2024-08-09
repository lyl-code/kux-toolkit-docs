# minBy

找到数组中通过将 `getValue` 函数应用于每个元素来返回具有最小值的元素，并返回该元素的值。如果数组为空，则返回 `null`。

函数接受一个数组和一个函数作为参数，返回数组中通过将 `getValue` 函数应用于每个元素来返回具有最小值的元素，并返回该元素的值。如果数组为空，则返回 `null`。

## 签名

```ts
function minBy<T>(arr : T[], getValue : (item : T) => number) : T | null
```

## 参数

- `arr`(`T[]`)：要搜索的数组。
- `getValue`(`(item : T) => number`)：一个函数，用于从数组元素中提取用于比较的值。

## 返回值

`T | null`：返回数组中通过将 `getValue` 函数应用于每个元素来返回具有最小值的元素，并返回该元素的值。如果数组为空，则返回 `null`。

### 示例

```ts
import { minBy } from '@/uni_modules/kux-toolkit'

const arr16 = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
]
const minItem = minBy(arr16, (item) : number => item['id'] as number)
console.log(minItem) // { id: 1 }
```
