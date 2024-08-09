# differenceWith

根据自定义相等函数计算两个数组的差集。

函数接受两个数组和一个自定义相等函数作为参数，返回一个新的数组，其中包含第一个数组中不包含第二个数组中元素，且经过提供的函数处理。

## 签名

```ts
function differenceWith<T>(firstArr : T[], secondArr : T[], isEqual : (item1 : T, item2 : T) => boolean) : T[]
```

## 参数

+ `firstArr`(`T[]`)：要求差集的数组。这是主要的数组，从中将比较和过滤元素。
+ `secondArr`(`T[]`)：包含要从第一个数组中排除的元素的数组。将检查这个数组中的每个元素是否在第一个数组中，如果找到匹配，则将其从结果中排除。
+ `isEqual`(`(item1 : T, item2 : T) => boolean`)：一个函数，用于比较两个元素是否相等。如果两个元素相等，则返回 `true`，否则返回 `false`。

## 返回值

`T[]`：一个新的数组，其中包含第一个数组中不包含第二个数组中元素，且经过提供的函数处理。

### 示例

```ts
import { differenceWith } from '@/uni_modules/kux-toolkit'

const array3 = [{ id: 1 }, { id: 2 }, { id: 3 }]
const array4 = [{ id: 2 }, { id: 4 }]
const comparer = (item1 : UTSJSONObject, item2 : UTSJSONObject) : boolean => item1.get('id') == item2.get('id')
const diffArrWith = differenceWith(array3, array4, comparer)
console.log(diffArrWith) // [{ id: 1 }, { id: 3 }]
```
