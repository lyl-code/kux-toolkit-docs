# intersectionWith

根据自定义相等函数计算两个数组的交集。

函数接受两个数组和一个自定义相等函数作为参数，返回一个新的数组，其中包含两个数组经过提供的函数处理后的交集。

## 签名

```ts
function intersectionWith<T>(firstArr : T[], secondArr : T[], isEqual : (item1 : T, item2 : T) => boolean) : T[]
```

## 参数

- `firstArr`(`T[]`)：第一个数组。
- `secondArr`(`T[]`)：第二个数组。
- `isEqual`(`(item1 : T, item2 : T) => boolean`)：自定义相等函数。

## 返回值

`T[]`：一个新的数组，其中包含两个数组经过提供的函数处理后的交集。

### 示例

```ts
import { intersectionWith } from '@/uni_modules/kux-toolkit'

const array7 = [{ id: 1 }, { id: 2 }, { id: 3 }]
const array8 = [{ id: 2 }, { id: 4 }]
const comparer2 = (item1 : UTSJSONObject, item2 : UTSJSONObject) : boolean => item1.get('id') == item2.get('id')
const intersectionArrWith = intersectionWith(array7, array8, comparer2)
console.log(intersectionArrWith) // [{ id: 2 }]
```
