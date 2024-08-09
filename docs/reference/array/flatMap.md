# flatMap

将嵌套数组的每个元素映射到给定的迭代函数，然后将其展开到所需的深度。

函数接受一个数组、一个迭代函数和一个深度作为参数，返回一个新的数组，其中包含原数组中每个元素经过迭代函数映射后的结果，并展开到所需的深度。

## 签名

```ts
function flatMap<T, U>(arr : T[], iteratee : (item : T) => U[], depth : number = 1) : U[]
```

## 参数

- `arr`(`T[]`)：需要展开的数组。
- `iteratee`(`(item : T) => U[]`)：一个迭代函数，接受数组中的每个元素，返回一个数组。
- `depth`(`number`)：展开的深度，默认为 1。

## 返回值

`T[]`：一个新的数组，其中包含原数组中每个元素经过迭代函数映射后的结果，并展开到所需的深度。

### 示例

```ts
import { flatMap } from '@/uni_modules/kux-toolkit'

const arr10 = [1, 2, 3]
const flatMappedArr = flatMap(arr10, (item) : number[] => [item, item], 1)
console.log(flatMappedArr) // [1, 1, 2, 2, 3, 3]
const flatMappedArr2 = flatMap(arr10, (item) : number[] => [item * item], 1)
console.log(flatMappedArr2) // [1, 4, 9]
const words = ['hello', 'world', 'kux']
const filteredWords = flatMap(words, (word) : string[] => word.split(''), 2)
console.log(filteredWords) // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 'k', 'u', 'x']
```
