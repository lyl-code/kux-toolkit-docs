# flatten

将数组展开到所需的深度。

函数接受一个数组和一个深度作为参数，返回一个新的数组，其中包含原数组中每个元素展开后的结果，并展开到所需的深度。

## 签名

```ts
function flatten<T>(arr : T[], depth : number = 1) : T[]
```

## 参数

- `arr`(`T[]`)：需要展开的数组。
- `depth`(`number`)：展开的深度，默认为 `1`。

## 返回值

`T[]`：展开后的数组。

### 示例

```ts
import { flatten } from '@/uni_modules/kux-toolkit'

const originArr = [1, [2, 3], [4, [5, 6]]];
const flattenedArr = flatten(originArr)
console.log(flattenedArr) // [1, 2, 3, 4, [5, 6]]
const flattenedArr2 = flatten(originArr, 1)
console.log(flattenedArr2) // [1, 2, 3, 4, [5, 6]]
const flattenedArr3 = flatten(originArr, 2)
console.log(flattenedArr3) // [1, 2, 3, 4, 5, 6]
```
