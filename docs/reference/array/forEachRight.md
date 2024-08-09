# forEachRight

从右到左迭代数组的每个元素，并对其执行指定函数。

函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含原数组中每个元素从右到左迭代后的结果。

## 签名

```ts
function forEachRight<T, U>(arr : T[], iteratee : (item : T, index : number, arr : T[]) => U) : U[]
```

## 参数

- `arr`(`T[]`)：需要迭代的数组。
- `iteratee`(`(item : T, index : number, arr : T[]) => U`)：迭代函数，接受三个参数：
  - `item`(`T`)：数组中的元素。
  - `index`(`number`)：元素的索引。
  - `arr`(`T[]`)：原数组。

## 返回值

`U[]`：返回一个新的数组，其中包含原数组中每个元素从右到左迭代后的结果。

### 示例

```ts
import { forEachRight } from '@/uni_modules/kux-toolkit'

const arr11 = [1, 2, 3]
const resultArr11 : number[] = []
forEachRight(arr11, (item, _index, _arr) : void => {
    resultArr11.push(item)
})
console.log(resultArr11) // [3, 2, 1]
```
