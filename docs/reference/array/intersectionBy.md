# intersectionBy

计算经过提供的函数处理后的两个数组的交集。

函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组经过提供的函数处理后的交集。

## 签名

```ts
function intersectionBy<T, U>(firstArr : T[], secondArr : T[], mapper : (item : T) => U) : T[]
```

## 参数

- `firstArr`(`T[]`)：第一个数组。
- `secondArr`(`T[]`)：第二个数组。
- `mapper`(`(item : T) => U`)：一个函数，用于处理数组中的元素。

## 返回值

`T[]`：一个新的数组，其中包含两个数组经过提供的函数处理后的交集。

### 示例

```ts
import { intersectionBy } from '@/uni_modules/kux-toolkit'

const array5 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const array6 = [{ id: 2 }, { id: 4 }];
const mapper2 = (item : UTSJSONObject) : any | null => item.get('id')
const intersectionArrBy = intersectionBy(array5, array6, mapper2)
console.log(intersectionArrBy) // [{ id: 2 }, { id: 4 }]
```
