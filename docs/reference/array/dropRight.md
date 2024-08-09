# dropRight

从数组的结尾移除指定数量的元素并返回剩余的元素组成的新数组。

函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含原数组从结尾移除指定数量的元素后的元素。

## 签名

```ts
function dropRight<T>(arr : T[], n : number) : T[]
```

## 参数

- `arr`(`T[]`)：需要处理的数组。
- `n`(`number`)：需要移除的元素数量。

## 返回值

`T[]`：一个新的数组，其中包含原数组从结尾移除指定数量的元素后的元素。

### 示例

```ts
import { dropRight } from '@/uni_modules/kux-toolkit'

const arr5 = [1, 2, 3, 4, 5]
const droppedRightArr = dropRight(arr5, 2)
console.log(droppedRightArr) // [1, 2, 3]
```
