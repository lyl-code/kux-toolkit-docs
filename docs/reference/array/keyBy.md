# keyBy

映射数组中的每个元素，基于提供的生成键的函数

函数接受一个数组和一个函数作为参数，返回一个对象，其中包含原数组中每个元素映射后的结果，基于提供的生成键的函数。

如果数组中有重复的键，则后出现的元素将覆盖前面的元素。

## 签名

```ts
function keyBy<T, U>(arr : T[], iteratee : (item : T) => U) : UTSJSONObject
```

## 参数

- `arr`(`T[]`)：需要处理的数组。
- `iteratee`(`(item : T) => U`)：一个函数，用于生成键。

## 返回值

`UTSJSONObject`：一个对象，其中包含原数组中每个元素映射后的结果，基于提供的生成键的函数。

### 示例

```ts
import { keyBy } from '@/uni_modules/kux-toolkit'

const arr15 = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
]
const keyedArr = keyBy(arr15, (item) : string => item['category'] as string)
console.log(keyedArr)
// {
//     fruit: { category: 'fruit', name: 'banana' },
//     vegetable: { category: 'vegetable', name: 'carrot' },
// }
```
