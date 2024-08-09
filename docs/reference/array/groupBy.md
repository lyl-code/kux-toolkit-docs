# groupBy

将数组的元素根据指定函数分组，并返回一个新的数组，其中包含原数组中每个元素从右到左迭代后的结果。

函数接受一个数组和一个函数作为参数，返回一个对象，其中包含原数组中每个元素根据指定函数分组后的结果。

## 签名

```ts
function groupBy<T, U>(arr : T[], iteratee : (item : T) => U) : UTSJSONObject
```

## 参数

- `arr`(`T[]`)：需要分组的数组。
- `iteratee`(`(item : T) => U`)：一个函数，用于指定如何分组。函数接受一个元素作为参数，返回一个用于分组的键。

## 返回值

`UTSJSONObject`：返回一个新的数组，其中包含原数组中每个元素从右到左迭代后的结果。

### 示例

```ts
import { groupBy } from '@/uni_modules/kux-toolkit'

const arr12 = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
]
const groupedArr = groupBy(arr12, (item) : string => item['category'] as string)
console.log(groupedArr)
// {
//     fruit: [
//         { category: 'fruit', name: 'apple' },
//         { category: 'fruit', name: 'banana' },
//     ],
//     vegetable: [
//         { category: 'vegetable', name: 'carrot' },
//     ],
// }
```
