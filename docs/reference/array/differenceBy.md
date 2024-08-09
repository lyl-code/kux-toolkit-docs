# differenceBy

计算经过提供的函数处理后的两个数组的差集。

函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含第一个数组中不包含第二个数组中元素，且经过提供的函数处理。

## 签名

```ts
function differenceBy<T, U>(firstArr : T[], secondArr : T[], mapper : (item : T) => U) : T[]
```

## 参数

+ `firstArr`(`T[]`)：要求差集的数组。这是主要的数组，从中将比较和过滤元素。
+ `secondArr`(`T[]`)：包含要从第一个数组中排除的元素的数组。将检查这个数组中的每个元素是否在第一个数组中，如果找到匹配，则将其从结果中排除。
+ `mapper`(`(item : T) => U`)：用于映射两个数组元素的函数。该函数应用于两个数组中的每个元素，并基于映射后的值进行比较。

## 返回值

`T[]`：一个新的数组，其中包含第一个数组中不包含第二个数组中元素。

### 示例

```ts
import { differenceBy } from '@/uni_modules/kux-toolkit'

const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const array2 = [{ id: 2 }, { id: 4 }];
const mapper = (item : UTSJSONObject) : any | null => item.get('id')
const diffArrBy = differenceBy(array1, array2, mapper)
console.log(diffArrBy)
// [{ id: 1 }, { id: 3 }, { id: 5 }]
```
